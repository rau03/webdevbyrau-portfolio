import { projects, projectsSection } from "@/lib/content";
import ProjectCardFeatured from "@/components/ProjectCardFeatured";
import ProjectCardCompactPlus from "@/components/ProjectCardCompactPlus";
import ProjectCardCompact from "@/components/ProjectCardCompact";

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-10 pt-4 sm:px-10"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-text-secondary">
        {projectsSection.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl uppercase leading-[0.98] text-text-primary sm:text-5xl lg:text-6xl">
        {projectsSection.headline}
      </h2>

      <div className="mt-12 space-y-6">
        {projects.mountainPathway && (
          <ProjectCardFeatured project={projects.mountainPathway} />
        )}

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {projects.pmj && <ProjectCardCompactPlus project={projects.pmj} />}
          {projects.pickleball && (
            <ProjectCardCompact project={projects.pickleball} />
          )}
        </div>
      </div>
    </section>
  );
}
