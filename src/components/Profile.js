import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
// import { response } from "express";

export default function Profile({ Session, userData, setSession }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm("Are you want to Logout!")) {
      setSession(0);
      navigate("/");
    }
  };
  return (
    <>
      <div className="p-16">
        {/* <h1>{Records[1]}</h1> */}
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="relative">
              {" "}
              <div className="hover:scale-105 w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  src="https://source.unsplash.com/1600x900/?passport_size,male"
                  alt="random"
                  className="h-full mx-auto object-cover rounded-full w-full"
                />
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 md:py-3 px-4 flex justify-between mt-32 md:mt-0 md:justify-center">
              {/* <button
                onClick={handleClick}
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Logout <LogoutIcon />
              </button>{" "} */}
            </div>{" "}
          </div>{" "}
          <div className="md:mt-20 md:pt-10 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              {userData.fname}
              <span className="font-light text-gray-500">&nbsp;</span>
              {userData.lname}
            </h1>{" "}
            {/* <a href="mailto:{userData.email}">{userData.email}</a>
            <a href="tel:+123456789">{userData.phone}</a> */}
            <p className="font-light text-gray-600 mt-3">
              <a href="mailto:">{userData.email}</a>
            </p>{" "}
            <p className="font-light text-gray-600 mt-3">
              {" "}
              <a href="tel:+123456789">{userData.phone}</a>
            </p>{" "}
            <p className="mt-8 text-xl font-bold text-gray-500">
              {userData.course}
            </p>{" "}
            <p className="mt-2 text-gray-500">
              Apex College - The Morden Education
            </p>{" "}
            <div className="flex my-5 justify-center">
              <button
                onClick={handleClick}
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Logout <LogoutIcon />
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              <strong className="text-xl">
                {" "}
                Apex Collage &nbsp; &gt;&gt;{" "}
              </strong>
              "Effortlessly manage your college with our comprehensive college
              management system. Improve efficiency, increase productivity, and
              empower your faculty and students."
            </p>{" "}
{/*            
              <Link
                  to="/About"
                  className="text-indigo-500 text-center py-2 px-4  font-medium mt-4"
                >
                   Show more
              </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
