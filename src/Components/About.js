import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="mt-10 mb-20 relative truncate">
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center mb-12 ">
          About
        </h1>

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>

        <div className="space-y-12">
          <div className="relative flex items-center">
            <div className="w-1/2 text-start md:text-right pr-8 text-balance">
              <h3 className="text-lg font-semibold text-white">
                MERN Stack Developer Intern, 05/2024 - 08/2024
              </h3>
              <p className="text-gray-300">Workverse, Mumbai</p>
              <p className="text-gray-300 mt-4">
                Contributed to 3 projects by designing user interfaces,
                implementing APIs, and deploying servers.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <span className="bg-yellow-400 rounded-full h-4 w-4 absolute left-1/2 transform -translate-x-1/2"></span>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="w-1/2 flex justify-center">
              <span className="bg-yellow-400 rounded-full h-4 w-4 absolute left-1/2 transform -translate-x-1/2"></span>
            </div>
            <div className="w-1/2 pl-8 text-start text-balance">
              <h3 className="text-lg font-semibold text-white">
                Frontend Developer Intern, 01/2024 - 04/2024
              </h3>
              <p className="text-gray-300">Ntech Global Solutions, Mumbai</p>
              <p className="text-gray-300 mt-4">
                Worked on an eCommerce project, redesigning the UI and updating
                content to improve user experience.
              </p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="w-1/2 text-start md:text-right pr-8 text-balance">
              <h3 className="text-lg font-semibold text-white">
                Full Stack Development Course, 07/2023 - 12/2023
              </h3>
              <p className="text-gray-300 mt-4">
                Completed a comprehensive Full Stack Development course covering
                modern web technologies and frameworks.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <span className="bg-yellow-400 rounded-full h-4 w-4 absolute left-1/2 transform -translate-x-1/2"></span>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="w-1/2 flex justify-center">
              <span className="bg-yellow-400 rounded-full h-4 w-4 absolute left-1/2 transform -translate-x-1/2"></span>
            </div>
            <div className="w-1/2 pl-8 text-start text-balance">
              <h3 className="text-lg font-semibold text-white">
                BE - EXTC, 09/2019 - 06/2023
              </h3>
              <p className="text-gray-300 mt-4">
                Graduated with a Bachelor's in Electronics and Telecommunication
                Engineering from VPPCOE, Sion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
