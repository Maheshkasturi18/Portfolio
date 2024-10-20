import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="my-20">
        <h1 className="text-white text-2xl md:text-3xl text-center  font-semibold">
          Skills
        </h1>

        <div className="hidden md:block">
          <div className="mt-16 flex flex-col gap-20 ">
            <div className="flex flex-wrap justify-between">
              {" "}
              <img className="w-1/12 " src="html.svg" alt="html" />
              <img className="w-1/12" src="css.svg" alt="css" />
              <img className="w-1/12" src="js.svg" alt="js" />
              <img className="w-1/12" src="react.svg" alt="react" />
              <img className="w-1/12 " src="redux.svg" alt="redux" />
              <img className="w-1/12 " src="bootstrap.svg" alt="bootstrap" />
            </div>

            <div className="flex flex-wrap justify-around">
              {" "}
              <img className="w-1/12 " src="tailwind.svg" alt="tailwind" />
              <img className="w-1/12" src="mongo.svg" alt="mongo" />
              <img className="w-1/12 " src="node.svg" alt="node" />
              <img className="w-1/12 " src="express.svg" alt="express" />
              <img className="w-1/12" src="chakra.svg" alt="chakra" />
            </div>

            <div className="flex flex-wrap justify-between">
              <img className="w-1/12" src="git.svg" alt="git" />
              <img className="w-1/12 " src="github.svg" alt="github" />
              <img className="w-1/12 " src="aws.svg" alt="aws" />
              <img className="w-1/12 " src="vercel.svg" alt="vercel" />
              <img className="w-1/12" src="swagger.svg" alt="swagger" />
              <img className="w-1/12 " src="postman.svg" alt="postman" />
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="mt-8 flex flex-col gap-8 ">
            <div className="flex flex-wrap justify-around">
              {" "}
              <img className="w-2/12 " src="html.svg" alt="html" />
              <img className="w-2/12" src="css.svg" alt="css" />
              <img className="w-2/12" src="js.svg" alt="js" />
            </div>

            <div className="flex flex-wrap justify-between">
              <img className="w-2/12" src="react.svg" alt="react" />
              <img className="w-2/12 " src="redux.svg" alt="redux" />
              <img className="w-2/12 " src="bootstrap.svg" alt="bootstrap" />
              <img className="w-2/12 " src="tailwind.svg" alt="tailwind" />
            </div>

            <div className="flex flex-wrap justify-around">
              <img className="w-2/12" src="mongo.svg" alt="mongo" />
              <img className="w-2/12 " src="express.svg" alt="express" />
              <img className="w-2/12 " src="node.svg" alt="node" />
            </div>

            <div className="flex flex-wrap justify-between">
              <img className="w-2/12" src="chakra.svg" alt="chakra" />
              <img className="w-2/12 " src="aws.svg" alt="aws" />
              <img className="w-2/12" src="git.svg" alt="git" />
              <img className="w-2/12 " src="github.svg" alt="github" />
            </div>

            <div className="flex flex-wrap justify-around">
              <img className="w-2/12 " src="vercel.svg" alt="vercel" />
              <img className="w-2/12" src="swagger.svg" alt="swagger" />
              <img className="w-2/12 " src="postman.svg" alt="postman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
