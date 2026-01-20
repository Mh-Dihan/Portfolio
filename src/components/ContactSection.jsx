import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
          Let’s connect! Whether you have an idea, a question, or just want to chat,
          feel free to reach out. I’m always excited to meet new people, share ideas,
          and work on cool projects together. Drop me a message anytime!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

        
            <div className="space-y-6">
              
              <div className="flex justify-center space-x-80 text-center">
                {/* Email */}
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:dihan01715@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dihan01715@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+8810632200741"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    01632200741
                  </a>
                </div>
              </div>

              {/* Location Centered */}
              <div className="text-center">
                <h4 className="font-medium">Location</h4>
                <div className="flex justify-center items-center mt-1">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <span className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4">Contact with Me</h4>
              <div className="flex space-x-6 justify-center">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muhaiminul-hasan-dihan-90b97a3a0/"
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 rounded-full 
                             bg-primary/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700
                             transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin className="w-6 h-6 text-secondary" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mh_dihan_/"
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 rounded-full 
                             bg-primary/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400
                             transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="w-6 h-6 text-secondary" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/mh.dihan.5/"
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 rounded-full 
                             bg-primary/10 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700
                             transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-6 h-6 text-secondary" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
