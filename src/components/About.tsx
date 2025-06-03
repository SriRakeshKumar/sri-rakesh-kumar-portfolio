import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am a Full-Stack Developer with strong expertise in modern
            technologies like React, Node.js, GraphQL, Web Sockets, and more. I
            thrive on building dynamic web applications and scalable solutions
            that enhance user experience and business performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Master of Arts (Multimedia)
                  </h4>
                  <p className="text-gray-600">JNAFA University, Hyderabad</p>
                  <p className="text-sm text-gray-500">2022 – 2024</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    B.Sc. Animation
                  </h4>
                  <p className="text-gray-600">
                    Adikavi Nannayya University, Kakinada
                  </p>
                  <p className="text-sm text-gray-500">2018 – 2021 • 87%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="mr-3 text-green-600" />
                Experience
              </h3>
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Full-Time Developer
                </h4>
                <p className="text-gray-600">
                  Blue Spire Digital Pvt Ltd, Hyderabad
                </p>
                <p className="text-sm text-gray-500">Oct 2024 – Present</p>
                <div className="text-gray-700 mt-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Contributed to the development of an in-house Human
                      Resource Management System (HRMS), focusing primarily on
                      the Payroll module
                    </li>
                    <li>
                      Designed and implemented the Payroll Processing Workflow
                      with automated validation of pending requests in Leave,
                      Attendance, and Reimbursements modules
                    </li>
                    <li>
                      Developed error-handling mechanism to halt pay run and
                      report validation issues for resolution
                    </li>
                    <li>
                      Collaborated with the UI/UX team to develop Timesheets
                      module mockups aligning with user requirements and
                      business workflows
                    </li>
                    <li>
                      Developed reusable React components including Custom Table
                      with pagination and dynamic column rendering
                    </li>
                    <li>
                      Created Tabs, Status Bars, and other UI widgets to promote
                      code reusability and maintainability across modules
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold">1+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
