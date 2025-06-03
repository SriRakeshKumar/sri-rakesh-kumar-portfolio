import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS with your public key
  emailjs.init("7RKsMw2gSf78L12gR");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_tpo01hn", // Your Service ID
        "template_haubc7k", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sri Rakesh Kumar",
        },
        "7RKsMw2gSf78L12gR" // Your Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form only after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to Send Message",
        description:
          "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Ready to bring your project to life? Let's discuss how I can help
            you build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 h-12"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 h-12"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 h-12"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 h-12"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 resize-none min-h-[120px]"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 resize-none min-h-[120px]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-3 h-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-3 h-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-blue-100 text-sm md:text-base break-all">
                      srirakeshkumar891946@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-blue-100">8919461278</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/sri-rakesh-kumar-1567a223b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SriRakeshKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100 text-sm md:text-base">
            © 2025 Sri Rakesh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
