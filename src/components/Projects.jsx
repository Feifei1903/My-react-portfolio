import projectJSON from "@/assets/data/project.json"
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects(){
  const [projects] = useState(projectJSON);

    return(
         <section id="projects" className="py-20 sm:py-32 ">
         <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
           <div className="space-y-6 sm:space-y-8">
             <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>
             <div className="space-y-6">
               <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Projects I have worked on
               </p>
             {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
             </div>
           </div>
         </div>
       </section>
    )
}