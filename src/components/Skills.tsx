import { skills, skillsSection } from "@/lib/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-10 pt-4 sm:px-10"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-text-secondary">
        {skillsSection.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl uppercase leading-[0.98] text-text-primary sm:text-5xl lg:text-6xl">
        {skillsSection.headline}
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.category} className="border-t-2 border-text-primary pt-5">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-text-primary">
              {group.category}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <span className="inline-flex items-center rounded-full border border-accent px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {skillsSection.certification}
        </span>
      </div>
    </section>
  );
}
