import React from "react";

const Contact = () => {
  return (
    <section className="py-15 mt-10" id="contact">
      <div className="max-w-8xl mx-auto px-6 mt-5" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-white uppercase tracking-[0.2em] text-xs md:text-sm">
              Have a Project in Mind ?
            </p>
            <h4 className="text-[#fff] text-[96px] leading-[90px] font-brokmannsemibold my-5">
              Let's<span className="stroke-heading ms-4">Talk</span>
            </h4>
          </div>
          <div className="lg:col-span-8">
            <form className="w-full space-y-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/70 text-base md:text-lg mb-3"
                >
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white focus:outline-none text-white pb-3"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/70 text-base md:text-lg mb-3"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white focus:outline-none text-white pb-3"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/70 text-base md:text-lg mb-3"
                >
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none bg-transparent border-0 border-b border-white/60 focus:border-white focus:outline-none text-white pb-3"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full border border-white px-7 py-2 text-white text-base hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
