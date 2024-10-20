import React from "react";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="my-20">
        <h1 className="text-white text-2xl md:text-3xl text-center font-semibold">
          Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="max-w-sm p-6 mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <a
              href="https://medium.com/@kmahesh18001/steps-for-deploying-react-app-and-nodejs-server-in-vercel-and-render-494737535b5a"
              target="_blank"
              rel="noreferrer"
            >
              <img className="rounded-lg" src="blogimg.png" alt="" />
            </a>
            <div className="p-5">
              <a
                href="https://medium.com/@kmahesh18001/steps-for-deploying-react-app-and-nodejs-server-in-vercel-and-render-494737535b5a"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  Steps for Deploying React App and Nodejs Server in Vercel and
                  Render
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Written a full guided steps to deploy your react and node
                  projects to host it freely.
                </p>
              </a>
            </div>
          </div>

          <div className="max-w-sm p-6 mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <a
              href="https://medium.com/@kmahesh18001/steps-for-deploying-react-app-and-nodejs-server-in-vercel-and-render-494737535b5a"
              target="_blank"
              rel="noreferrer"
            >
              <img className="rounded-lg" src="blogimg.png" alt="" />
            </a>
            <div className="p-5">
              <a
                href="https://medium.com/@kmahesh18001/steps-for-deploying-react-app-and-nodejs-server-in-vercel-and-render-494737535b5a"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  Steps for Deploying React App and Nodejs Server in Vercel and
                  Render
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
