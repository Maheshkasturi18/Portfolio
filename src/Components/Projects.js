import React from "react";

const Project = () => {
  return (
    <section id="project">
      <h1 className="text-white text-2xl md:text-3xl text-center font-semibold">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-md-12">
        <div className="relative group col-span-1">
          <a
            href="https://emperia-ecom.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-lg h-auto object-cover w-full md:w-10/12 mx-auto"
              src="pc4_img.png"
              alt="pc4_img"
            />

            <div className="absolute top-[5%] left-[4%] md:left-[12%] w-[92%] md:w-[76%] h-[82%]">
              <img
                className="w-full h-full rounded "
                src="emperia.png"
                alt="Emperia Ecom"
              />

              <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-75 transition-opacity duration-300 rounded flex items-center justify-center">
                <span className="text-lg font-semibold text-white">
                  Emperia Ecommerce Website
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="relative group col-span-1">
          <a
            href="https://expense-management-03.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-lg h-auto object-cover w-full md:w-10/12 mx-auto"
              src="pc4_img.png"
              alt="pc4_img"
            />

            <div className="absolute top-[5%] left-[4%] md:left-[12%] w-[92%] md:w-[76%] h-[82%]">
              <img
                className="w-full h-full rounded "
                src="expense.png"
                alt="Expense Management"
              />

              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded flex items-center justify-center">
                <span className="text-lg font-semibold text-white">
                  Expense Management (Track your Expenses)
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="relative group col-span-1">
          <a
            href="https://figma-fusion.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-lg  h-auto object-cover w-full md:w-10/12 mx-auto"
              src="pc4_img.png"
              alt="pc4_img"
            />

            <div className="absolute top-[5%] left-[4%] md:left-[12%] w-[92%] md:w-[76%] h-[82%]">
              <img
                className="w-full h-full rounded "
                src="figmafusion.png"
                alt="Figma Fusion"
              />

              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded flex items-center justify-center">
                <span className="text-lg font-semibold text-white">
                  Figma Fusion (Figma to code )
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
