import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col mt-10 items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          
          <div className="flex justify-center">
            <img
              src="/Projects/MyPic-2.jpg" // <-- put your image file path here
              alt="Image"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-primary opacity-0 animate-fade-in"
            />
          </div>

          
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              
              Muhaiminul Hasan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              
              Dihan
            </span>
          </h1>

          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a Final-year student in [ECE (electrical and computer science engineering)] at North South University with strong 
            project experience in web development and 3D data research. Passionate about learning new
            technologies and building real-world solutions. Seeking an opportunity to grow as a
            software/web developer in a dynamic and innovative environment.
          </p>

         
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Check My Work
            </a>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
