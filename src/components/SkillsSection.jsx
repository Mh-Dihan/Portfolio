import { useState } from "react";
import { cn } from "@/lib/utils";

    const skills = [
    //Frontend
    { name: "HTML/CSS", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", category: "frontend", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Next.js", category: "frontend", logo: "https://cdn.simpleicons.org/nextdotjs/000000", logoClass: "dark:invert" },

    //Backend
    { name: "Node.js", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", category: "backend", logo: "/skill-logos/express.svg" },
    { name: "MongoDB", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Mysql", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SQL", category: "backend", logo: "https://cdn.simpleicons.org/sqlite/003B57" },

    //Tools
    { name: "Git/GitHub", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", logoClass: "dark:invert" },
    { name: "MS Word", category: "tools", logo: "/skill-logos/ms-word.svg" },
    { name: "PowerPoint", category: "tools", logo: "/skill-logos/powerpoint.svg" },
    { name: "VS Code", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ];

    const categories = ["all","frontend","backend","tools"]


export const SkillsSection = () => {
    const [activeCategory,setActiveCategory] = useState("all");

    const filteredskills =skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               My <span className="text-primary">Skills</span>
            </h2>

             <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                     <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : 
                            "bg-secondary/70 text-foreground hover:bd-secondary"  
                        )}
                     >
                        {category}
                     </button>
                    ))}
              </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredskills .map((skill,key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover border border-border/50">
                        <div className="flex items-center gap-4 text-left">
                            <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-secondary/60 p-2.5 ring-1 ring-border/60">
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className={cn("h-10 w-10 object-contain", skill.logoClass)}
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg leading-tight">
                                    {skill.name}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground capitalize">
                                    {skill.category}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </div>

    </section> 
}
