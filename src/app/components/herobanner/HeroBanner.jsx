"use client";

import React, { useEffect, useRef } from "react";

const HeroBanner = ({ className = "", style }) => {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = window.devicePixelRatio || 1;

    const stars = [];
    const STAR_COUNT = 320;
    const dustClouds = Array.from({ length: 4 }, () => ({
      x: 0.1 + Math.random() * 0.8,
      y: 0.15 + Math.random() * 0.7,
      r: 0.24 + Math.random() * 0.24,
      a: 0.02 + Math.random() * 0.02,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i += 1) {
        const depth = Math.random();
        const brightChance = Math.random();
        const size =
          brightChance > 0.9
            ? 1.9 + Math.random() * 1.7
            : 0.45 + Math.random() * 1.4;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: depth,
          size,
          bright: brightChance > 0.84,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      pointerRef.current.tx = Math.max(-1, Math.min(1, nx));
      pointerRef.current.ty = Math.max(-1, Math.min(1, ny));
    };

    const handleLeave = () => {
      pointerRef.current.tx = 0;
      pointerRef.current.ty = 0;
    };

    const drawBackdrop = () => {
      const pointer = pointerRef.current;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(0.55, "#020202");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < dustClouds.length; i += 1) {
        const cloud = dustClouds[i];
        const nx = cloud.x * width - pointer.x * (22 + i * 6);
        const ny = cloud.y * height - pointer.y * (14 + i * 4);
        const nr = Math.max(width, height) * cloud.r;
        const haze = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr);
        haze.addColorStop(0, `rgba(255, 255, 255, ${(cloud.a * 1.6).toFixed(3)})`);
        haze.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = haze;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const drawStarfield = (time) => {
      const pointer = pointerRef.current;
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      const pointerEnergy =
        Math.min(1, Math.abs(pointer.x) + Math.abs(pointer.y)) * 0.7;

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        const parallax = (1 - star.z) * 36 + 6;
        const sx = star.x - pointer.x * parallax;
        const sy = star.y - pointer.y * parallax;
        const pulse = Math.sin(time * 0.0013 + star.twinkle) * 0.28 + 0.76;
        const burst =
          Math.max(
            0,
            Math.sin(time * 0.0034 + star.twinkle * 2.6 + (1 - star.z) * 4)
          ) * 0.36;
        const alpha =
          (0.25 + star.z * 0.75) * (pulse + burst + pointerEnergy * 0.24);
        const glow =
          star.bright || star.z > 0.76
            ? 1.3 + burst * 3.4 + pointerEnergy * 1.1
            : 0.45 + burst * 1.5;

        if (sx < -10 || sx > width + 10 || sy < -10 || sy > height + 10) {
          continue;
        }

        if (star.bright || star.z > 0.64) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${(alpha * 0.16).toFixed(3)})`;
          ctx.arc(sx, sy, glow * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha).toFixed(3)})`;
        ctx.arc(sx, sy, star.size * (0.5 + star.z), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawHoverLight = () => {
      const pointer = pointerRef.current;
      const px = width * (0.5 + pointer.x * 0.16);
      const py = height * (0.5 + pointer.y * 0.16);
      const intensity = Math.min(1, (Math.abs(pointer.x) + Math.abs(pointer.y)) * 1.2);
      if (intensity < 0.02) return;

      const glow = ctx.createRadialGradient(
        px,
        py,
        0,
        px,
        py,
        Math.max(width, height) * (0.28 + intensity * 0.1)
      );
      glow.addColorStop(0, `rgba(255, 255, 255, ${(0.035 + intensity * 0.055).toFixed(3)})`);
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = (time) => {
      drawBackdrop();
      drawStarfield(time);
      drawHoverLight();
      raf = window.requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);
    raf = window.requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className={`w-full px-2 font-brokmannlight relative ${className}`}
      style={style}
    >
      <div className="h-[650px] rounded-[15px] w-full overflow-hidden relative flex flex-col justify-center items-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/20" />

        <span className="text-white uppercase text-[15px] relative z-10">
          FULL STACK DEVELOPER Based in nashik
        </span>

        <h1 className="text-white capitalize text-[57px] my-5 relative z-10">
          scalable <span className="text-[#fccd03]">web & mobile</span> products
          Service
        </h1>
        <p className="text-white text-[15px] relative z-10">
          Providing best website designing services and web development services
          focused on performance, scalability, and modern user experience.
        </p>

        <a
          href=""
          className="bg-[#fccd03] font-bold text-[#2e2e2e] text-[16px] py-4 px-6 mt-10 rounded-[50px] relative z-10"
        >
          Tell us about your project
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
