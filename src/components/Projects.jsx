import projectsJSON from "@/assets/data/project.json";
import ProjectCard from "/src/components/ProjectCard";
import { useState } from "react";

export default function Projects() {
  const [projects] = useState(projectsJSON);

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A selection of projects I have worked on, showcasing my skills in
            modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

 