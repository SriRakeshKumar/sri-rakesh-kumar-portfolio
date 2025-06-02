
import { Code, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern frameworks like React, Node.js, and more.",
      features: ["Custom Web Applications", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "API Integration & Development",
      description: "Building robust APIs and integrating third-party services for seamless data flow.",
      features: ["REST & GraphQL APIs", "Database Design", "Third-party Integrations"]
    },
    {
      icon: Zap,
      title: "Real-Time Applications",
      description: "Creating dynamic, real-time web applications using Web Sockets and modern technologies.",
      features: ["Live Chat Systems", "Real-time Updates", "WebSocket Implementation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Web Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in end-to-end web development, offering tailored solutions for businesses looking to scale their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
