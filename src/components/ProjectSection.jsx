import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-commerce website",
        description: "ShopMate is a full-stack e-commerce app built with React and Flask. It features product browsing, category filters, cart and wishlist, secure authentication, admin tools, order tracking, password reset, and an AI assistant—all with a responsive, customizable UI and scalable APIs.",
        image: "/Projects/Project-1.png",
        tags: ["HTML,CSS,Python", "TypeScript"],
        githubUrl: "https://github.com/Mh-Dihan/shopmate-ecommerce-with-React-and-Flask",
        liveUrl: "https://shopmate-frontend-ten.vercel.app/",
    },

    {
        id: 2,
        title: "Doctor Appointment Booking System",
        description: "The Doctor Appointment Booking System is a React-based healthcare platform that helps patients find doctors, explore specialties, and book appointments easily.",
        image: "/Projects/Project-2.png",
        tags: ["JavaScript"],
        githubUrl: "https://github.com/Mh-Dihan/Doctor-Appointment-Booking-System",
        liveUrl: "https://frontend-nu-seven-85.vercel.app/",
    },

    {
        id: 3,
        title: " Sentiment Analysis Using LSTM MLP and Hybrid Models ",
        description: "The MLP model achieved very high training accuracy and extremely low training loss; however, validation accuracy decreased while validation loss increased over epochs, indicating significant overfitting. In contrast, the LSTM model showed steady improvement in training performance with relatively stable validation accuracy. Although validation loss increased slightly, the LSTM demonstrated better generalization capability and reduced overfitting compared to the MLP model.",
        image: "/Projects/Project-3.png",
        tags: ["Python"],
        githubUrl: "https://github.com/Mh-Dihan/Sentiment-Analysis-Using-LSTM-MLP-and-Hybrid-Models",
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
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden
                     shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>


                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border
                                    rounded-full bg-secondary text-secondary-foreground"
                                    >{tag}</span>

                                ))}
                            </div>


                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.35)] hover:scale-105"
                                    >
                                        Live Demo <ExternalLink size={15} />
                                    </a>
                                )}

                                <div className="flex space-x-3">

                                    <a href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                                    >
                                        <Github size={20} />
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

                    Check My Github <ArrowRight size={16} />
                </a>

            </div>
        </div>
    </section>
}
