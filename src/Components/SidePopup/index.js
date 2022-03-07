import React from "react";

function SidePopup({ title, description,className }) {
  return (
    <div className={`${className} bg-white shadow-2xl rounded-xl pt-12 pb-12 space-y-8 md:w-1/2 w-10/12 z-50 p-10 text-center`} >
      <h1 className="font-poppins font-bold text-xl leading-6">{title}</h1>
      <p className="font-poppins font-normal text-sm leading-5 text-gray-200">
        {description}
      </p>
      <div className="flex justify-between items-center space-x-8">
        <button
          type="submit"
          className="w-48 mx-auto flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-100 focus:ring-offset-2 "
        >
          Login
        </button>
        <button
          type="submit"
          className="w-48 mx-auto flex justify-center py-3 px-4 border border-blue-100 rounded-xl shadow-sm text-sm font-medium text-blue-100 bg-transparent focus:ring-offset-2 "
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default SidePopup;
