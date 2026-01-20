import {Briefcase, Code,User,} from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-20 px-4 relative scroll-mt-0">
        
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-10">
                    <h3 className="text-2xl font-semibold">Passionate Programmer</h3>

                    <p className="text-muted-foreground">
                        Through my junior and senior design projects, as well as a capstone,
                        I’ve gained hands-on experience in
                        managing and executing projects effectively. 
                        These experiences taught me how to plan, collaborate, and deliver results with responsibility.
                    </p>

                    <p className="text-muted-foreground">
                        Proficient in C/C++, Java, Python, HTML, CSS, JavaScript, and React 
                        with Vite—building full-stack, 
                        responsive, and interactive web applications.
                    </p> 

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch 
                        </a>

                        <a href="Projects/resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>

                    </div>


                   </div>

                 <div className="gird grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">In my junior project (CSE299), I developed an e-commerce website called GI 
                                    Products of Bangladesh. This project gave me practical
                                     experience in web development, database management
                                    , and user-friendly design, building a solid foundation for future work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Java Projects</h4>
                                <p className="text-muted-foreground">Developed a Teacher Management System and a Tic-Tac-Toe game with GUI in Java, showcasing skills in 
                                    object-oriented programming, event-driven design,
                                    and interactive user interface development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Capstone Work</h4>
                                <p className="text-muted-foreground">Focused on 3D data processing. 
                                    Conducted research on point cloud processing and 
                                    noise reduction, analyzed academic papers, 
                                    implemented algorithms, and produced a comprehensive technical report.</p>
                            </div>
                        </div>
                    </div>

                 </div>

            </div>
        </div>
    
    </section>
}