import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Exam System",
      description:
        "A comprehensive exam management system with dual roles for Admin (Teacher) and Student. Teachers can create and distribute exams, while students can access and complete them through email links.",
      stack: ["React", "Java", "Spring Boot", "MongoDB"],
      highlights: [
        "Teachers can create and manage online exams effortlessly",
        "Automated email notifications for students",
        "Real-time submission tracking and score visibility",
        "Secure storage and retrieval of exam data",
      ],
      shortName: "OES",
      githubUrl: "https://github.com/SriRakeshKumar",
      status: "ongoing",
    },
    {
      title: "Project Management System (PMS)",
      description:
        "A comprehensive project management solution built with modern web technologies, featuring real-time collaboration and advanced task management capabilities.",
      stack: ["React", "Node.js", "GraphQL", "MongoDB"],
      highlights: [
        "Boosted task allocation efficiency by 80%",
        "Integrated calendar for task scheduling",
        "Status tracking for pending/completed tasks",
        "Real-time collaboration features",
      ],
      shortName: "PMS",
      githubUrl: "https://github.com/SriRakeshKumar",
      status: "completed",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work and technical expertise in building
            scalable web applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl text-white font-bold">
                        {project.shortName}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">{project.title}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      View Code
                    </Button>
                    {project.status === "ongoing" ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        In Progress
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
