import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title:"GI Products website",
        description:"Make a website for my junior design project using php also make a randomization in every refresh show new products",
        image: "/Projects/Project1.png",
        tags: ["HTML,CSS,JS","PHP","MySQL"],
        githubUrl:"#",
    },

    {
        id: 2,
        title:"Tic-Tac-Toe Java Game",
        description:"Develop a simple game in Java using Swing GUI where players click a moving button to score points within a 30-second timer",
        image: "/Projects/Project2.png",
        tags: ["Java"],
        githubUrl:"#",
    },

    {
        id: 3,
        title:"Car Price Prediction using multiple models",
        description:"Use six different models and check the accuracy,MSE,RMSE,Root^Square mean",
        image: "/Projects/Project3.png",
        tags: ["Python"],
        githubUrl:"#",
    },
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured 
                <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here I showcase some of the projects I made and worked on 
                — including websites, data tools, visualizations, 
                and creative animations — highlighting their process, features, and improvements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) =>( 
                    <div key={key} className="group bg-card rounded-lg overflow-hidden
                     shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>


                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs font-medium border
                                    rounded-full bg-secondary text-secondary-foreground"
                                    >{tag}</span>

                                ))}
                            </div>
                        

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                               
                                <a href={project.githubUrl} 
                                target="blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                                >
                                    <Github size={20}/>
                                </a>

                            </div>
                          </div>
                        </div>
                    </div>

                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Mh-Dihan" 
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                
                    Check My Github <ArrowRight size={16}/>
                </a>

            </div>
        </div>
    </section>
}