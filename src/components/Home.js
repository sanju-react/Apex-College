import img1 from "../image/home.jpg";
// import img1 from "../image/college students.gif";
// import teamimg from "../image/Coding workshop.gif";
import teamimg from "../image/team.jpg";
import ayushimg from "../image/Team/ayush.jpg";
// import ayushimg from "../image/Team/ayush1.jpg";
import sanjuimg from "../image/Team/sanju.png";
import akashimg from "../image/Team/akash.png";
import avnishimg from "../image/Team/avnish.jpeg";
import Button from "@mui/material/Button";
import "./css/Home.css";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [user, setUser] = useState([]);
  const [userBca, setUserBca] = useState([]);
  const [userBcom, setUserBcom] = useState([]);
  const [userBba, setUserBba] = useState([]);

  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("http://localhost:5000/getUser")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch bca Students
  const getBcaUser = () => {
    axios
      .get("http://localhost:5000/getBcaUser")
      .then((response) => {
        setUserBca(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch bcom Students
  const getBcomUser = () => {
    axios
      .get("http://localhost:5000/getBcomUser")
      .then((response) => {
        setUserBcom(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch bba Students
  const getBbaUser = () => {
    axios
      .get("http://localhost:5000/getBbaUser")
      .then((response) => {
        setUserBba(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };

  // get all data function call
  useEffect(() => {
    getAllUser();
    getBcaUser();
    getBcomUser();
    getBbaUser();
  }, []);

  // count all students
  if (user.length > 0) {
    var lenAll = user.length;
  } else {
    lenAll = 0;
  }
  // count bca students
  if (userBca.length > 0) {
    var lenBca = userBca.length;
  } else {
    lenBca = 0;
  }
  // count bcom students
  if (userBcom.length > 0) {
    var lenBcom = userBcom.length;
  } else {
    lenBcom = 0;
  }
  // count bba students
  if (userBba.length > 0) {
    var lenBba = userBba.length;
  } else {
    lenBba = 0;
  }

  return (
    <>
      <section className="min-h-screen  bg-white flex md:flex-row flex-col w-screen gap-2 mx-auto">
        <div className=" bg-white  mx-10 my-auto flex-d align-middle justify-center sm:w-[40%]">
          <div className="">
            <h1 className="mt-5 text-4xl sm:text-8xl">
              <strong>
                Want to <span className="text-blue-500 font-bold">learn</span>
              </strong>
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Learn?",
                1000,
                "Coding ?",
                1000,
                "C++ ?",
                1000,
                "Java ?",
                1000,
                "Python ?",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
            <h5 className="display-6" style={{ fontSize: "2em" }}>
              We make programming simple & easy to understand.
            </h5>
            <Link to="/Sign" className="">
              <Button className="my-5 bg-blue-700" variant="contained">
                Join US
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-white sm:w-[60%] px-5 ">
          <img
            src={img1}
            alt="Login Images"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      <div
        id="csvbg"
        className="h-[130vh]  sm:h-[35vh] bg-cover bg-center grid grid-flow-row  sm:flex gap-5 align-middle justify-around"
      >
        <div className="my-auto">
          <div className="transform hover:text-white hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-13 sm:w-40 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>{" "}
          </div>
          <CountUp
            start={0}
            end={lenBca}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="BCA : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className="my-auto">
          <div className="transform hover:text-white  hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-13 sm:w-40"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <CountUp
            start={0}
            end={lenBcom}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="B.Com : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className="my-auto">
          <div className="transform hover:text-white  hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-13  sm:w-40"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
          </div>
          <CountUp
            start={0}
            end={lenBba}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="BBA : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className="my-auto">
          <div className="transform hover:text-white  hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-13 sm:w-40"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <CountUp
            start={0}
            end={lenAll}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="Total : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      </div>
      <div className="h-[50vh] w-full flex justify-center align-middle ">
        <div className="bg-white text-center   my-auto">
          <h1 className="w-full sm:w-55  block leading-normal font-bold text-blue-600 text-xl mb-3">
            NEW BATCH🔥{" "}
          </h1>
          <h1 className="w-full sm:w-55  block leading-normal text-gray-800 text-md mb-3">
            JOIN DELTA BATCH 2.0
          </h1>
          <h1 className="w-full sm:w-55  block leading-normal text-gray-800 text-md mb-3">
            Full Stack(MERN) Web Development
          </h1>
          <div className=" flex items-center justify-between">
            <Link to="/Sign" className="w-full">
              <button
                type="button"
                className="py-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Explore &gt;&gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[100vh] bg-blue-50 py-48">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div className="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div className="flex flex-wrap justify-center text-center">
                <div className="w-full lg:w-6/12 px-4">
                  {/* <!-- Header --> */}
                  <h1 className="text-blue-600 text-4xl font-bold mb-8">
                    Meet the Team
                  </h1>

                  {/* <!-- Description --> */}
                  <p className="text-gray-700 text-lg font-light mb-8">
                    With over 3 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              {/* <!-- Team Members --> */}
              <div className="flex flex-wrap">
                {/* <!-- Member #1 --> */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col transform hover:scale-105 transition duration-500">
                    {/* <!-- Avatar --> */}
                    <a
                      href="https://dev-varma-ayush.pantheonsite.io/"
                      className="mx-auto"
                      target="_blank"
                    >
                      <img
                        className="rounded-full object-cover h-full w-full shadow-md"
                        src={ayushimg}
                      />
                    </a>

                    {/* <!-- Details --> */}
                    <div className="text-center mt-6">
                      {/* <!-- Name --> */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Varma Ayush
                      </h1>

                      {/* <!-- Title --> */}
                      <div className="text-gray-700 font-light mb-2">
                        Founder & Specialist
                      </div>

                      {/* <!-- Social Icons --> */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* <!-- Linkedin --> */}
                        <a
                          href="https://www.linkedin.com/in/varma-ayush-045733219/"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                          href="https://twitter.com/mr_official_ayu"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                          href="https://www.instagram.com/dev.varma_ji/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Member #2 --> */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col transform hover:scale-105 transition duration-500">
                    {/* <!-- Avatar --> */}
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-full object-cover h-full w-full shadow-md"
                        src={sanjuimg}
                      />
                    </a>

                    {/* <!-- Details --> */}
                    <div className="text-center mt-6">
                      {/* <!-- Name --> */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Pandey Ramashankar
                      </h1>

                      {/* <!-- Title --> */}
                      <div className="text-gray-700 font-light mb-2">
                        Tired & M. Specialist
                      </div>

                      {/* <!-- Social Icons --> */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* <!-- Linkedin --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-linkedin text-blue-700 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                          href="https://twitter.com/Ram1302Pandey?s=09"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>
                        {/* <!-- Instagram --> */}
                        <a
                          href="https://www.instagram.com/_sanju_pandey_09/"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Member #3 --> */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col transform hover:scale-105 transition duration-500">
                    {/* <!-- Avatar --> */}
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-full object-cover h-full w-full shadow-md"
                        src={akashimg}
                      />
                    </a>

                    {/* <!-- Details --> */}
                    <div className="text-center mt-6">
                      {/* <!-- Name --> */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Maurya Akash
                      </h1>

                      {/* <!-- Title --> */}
                      <div className="text-gray-700 font-light mb-2">
                        Team Memeber
                      </div>

                      {/* <!-- Social Icons --> */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* <!-- Linkedin --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-linkedin text-blue-700 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Member #4 --> */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col transform hover:scale-105 transition duration-500">
                    {/* <!-- Avatar --> */}
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-full object-cover h-full w-full shadow-md"
                        src={avnishimg}
                      />
                    </a>

                    {/* <!-- Details --> */}
                    <div className="text-center mt-6">
                      {/* <!-- Name --> */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Yadav Avnish
                      </h1>

                      {/* <!-- Title --> */}
                      <div className="text-gray-700 font-light mb-2">
                        Developer
                      </div>

                      {/* <!-- Social Icons --> */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* <!-- Linkedin --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-linkedin text-blue-700 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          target="_blank"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-h-[100vh] overflow-hidden  text-center grid grid-flow-row gap-1 my-auto mx-auo">
        <h1 className="text-blue-600 text-4xl font-bold my-5">
          ON A MISSION TO TEACH MILLIONS
        </h1>
        <img
          src={teamimg}
          alt="team_img"
          className="h-[70%] object-cover mx-auto"
        />
      </div>
    </>
  );
}
