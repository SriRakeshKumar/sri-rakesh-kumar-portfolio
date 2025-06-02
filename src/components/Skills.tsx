
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Java", "C#", "JavaScript", "TypeScript", "React", "Angular", "Node.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Databases & APIs",
      skills: ["MongoDB", "SQL", "GraphQL", "REST APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Other Technologies",
      skills: ["Microservices", "Web Sockets", "Git", "Docker"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern web technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                <span className="text-2xl text-white font-bold">{index + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-700">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
