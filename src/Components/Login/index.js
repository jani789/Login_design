import React from "react";
import Tag from "../../assets/tag.png";
import Flag from "../../assets/flag.png";
import Arrow from "../../assets/Vector.png";
import Layer from "../../assets/Polygon 3.png";
import Cover from "../../assets/cover.png";
import SidePopup from "../SidePopup";
function Login() {
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="flex justify-between">
        <img src={Tag} alt="tag" className="z-10 h-36 w-36" />
        <div className="space-x-2 flex pr-9 pb-16 items-center">
          <img src={Flag} alt="flag" className="h-5 w-5" />
          <h3 className="text-base leading-5">Deutsch</h3>
          <img src={Arrow} alt="arrow" className="h-2 w-3" />
        </div>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-1 pb-5 rounded-tr-xl z-10 -mt-28 p-8">
        <div className="col-span-1 bg-white">
          <h1 className="text-3xl font-poppins leading-10 pt-4 font-bold text-center">
            Login or Register
          </h1>
          <p className="text-sm text-center pt-5">
            Log in or register for our online service for a Berechtigungsschein
          </p>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center">
            <div className="bg-white py-8 px-4 shadow-2xl rounded-xl sm:px-10 md:-mr-20 md:ml-4 z-50">
              <p className="font-bold text-lg leading-6 text-center ">
                Login as an Operator
              </p>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700 mt-5"
                  >
                    OperatorID
                  </label>
                  <div className="mt-1">
                    <input
                      name="text"
                      type="text"
                      placeholder="Enter your OperatorID..."
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-100 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Enter your Password..."
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-200 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div className="text-sm text-center">
                  <a href="#" className="font-base underline ">
                    Forgot my password
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-64 mx-auto flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-100 focus:ring-offset-2 "
                  >
                    Login
                  </button>
                  <p className="font-semibold text-md  mt-2 text-center">
                    New User?{" "}
                    <span className="text-blue-100 ">Contact JustIT here!</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-2 cover-img h-screen relative rounded-tr-3xl">
          <img
            src={Cover}
            alt="cover"
            className="absolute h-full w-full opacity-60"
          />
          <div className="flex flex-col space-y-14 justify-center items-center mt-16">
            <SidePopup
              className="mt-5"
              title="Login as a Lawyer"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            />
            <SidePopup
              className="mt-5"
              title="Login as a Applicant"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end -mt-14">

      <img src={Layer} alt="layer" className="" />
      </div>
    </div>
  );
}

export default Login;
