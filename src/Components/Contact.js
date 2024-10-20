import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Website`);
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
      });
  };
  return (
    <section id="contact">
      <div className="mb-16">
      <h4 className="text-white text-center text-2xl font-semibold mb-12">
          Contact
        </h4>


        <h4 className="text-white text-center ">
          Having a Project in Mind? Let's connect.
        </h4>

        <div className="mt-10 flex flex-col text-center gap-3 mx-auto lg:w-6/12 md:w-8/12 w-11/12 gap-5">
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                value="9019ec38-4b36-4479-a747-68369246aedd"
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input
                type="hidden"
                value="Mission Control"
                {...register("from_name")}
              />
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={` px-2 py-1 rounded w-full ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className=" text-red-600 text-end">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <input
                  type="tel"
                  placeholder="Mobile number"
                  name="phone"
                  className={`px-2 py-1 rounded w-full  ${
                    errors.phone
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                  {...register("phone", {
                    required: "Mobile number is required",
                    minLength: {
                      value: 10,
                      message: "Please enter a valid Mobile number",
                    },
                    maxLength: {
                      value: 10,
                      message: "Please enter a valid Mobile number",
                    },
                  })}
                />
                {errors.phone && (
                  <div className=" text-red-600 text-end">
                    <small>{errors.phone.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email_address" className="sr-only">
                  Email
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={`px-2 py-1 rounded w-full ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <div className=" text-red-600 text-end">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <textarea
                  name="message"
                  placeholder="Message"
                  className={`px-2 py-1 rounded h-20 w-full ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
                  {...register("message", { required: "Enter your Message" })}
                />
                {errors.message && (
                  <div className=" text-red-600 text-end">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="font-semibold  mx-auto px-2 py-1 rounded lg:w-2/12 md:w-3/12 w-4/12 bg-yellow-400 cursor-pointer umami--click--contact-submit"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}
          {isSubmitSuccessful && isSuccess && (
            <div>
              <div className="flex flex-row my-12 justify-between text-center text-white rounded-md">
                <svg
                  width="25"
                  height="25"
                  className="text-green-300"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                {/* <h3 className="py-5 text-2xl text-green-500">Success</h3> */}
                <p className="text-green-500 md:px-3">
                  Thank you for reaching out! I will get in touch with you
                  shortly.
                </p>
              </div>
              <button
                className="mt-6 text-indigo-600 focus:outline-none text-xs"
                onClick={() => reset()}
              >
                Submit another resposne?
              </button>
            </div>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="flex flex-row  justify-between text-center text-white rounded-md">
              <svg
                width="25"
                height="25"
                viewBox="0 0 100 100"
                className="text-red-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                  stroke="CurrentColor"
                  strokeWidth="3"
                />
              </svg>

              <h3 className="text-2xl text-red-400 py-7">
                Oops, Something went wrong!
              </h3>
              {/* <p className="text-gray-300 md:px-3">{Message}</p> */}
              {/* <button
                className="mt-5 focus:outline-none"
                onClick={() => reset()}
              >
                Try Again
              </button> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
