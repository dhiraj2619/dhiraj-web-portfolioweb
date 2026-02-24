import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "../../data/projectsData";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const project = projectBySlug[resolvedParams?.slug];

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen pb-16 bg-black" id="project-detail">
      <img
        src={project.image}
        alt={project.title}
        className="h-[36vh] w-full object-cover md:h-[100vh]"
      />

      <div className="mx-auto mt-10 max-w-4xl px-4 md:px-8">
        <Link
          href="/"
          className="inline-block text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
        >
          Back to Home
        </Link>

        <div className="mt-6 space-y-10">
          <header>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-200 md:text-lg">
              {project.overview}
            </p>
          </header>

          <section>
            <h2 className="text-xl font-semibold text-white md:text-2xl">
              Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/30 px-4 py-1.5 text-sm text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white md:text-2xl">
              Contributions
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-200">
              {project.contributions.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
