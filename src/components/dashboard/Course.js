import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";

export default function Course({ Session, setSession }) {
  const navigate = useNavigate();

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

  const handleClickCourses = () => {
    if (window.confirm("You have to Logout!")) {
      alert("You Are logged_out from the system.");
      setSession(0);
      navigate("/Courses");
    }
  };
  const handleClickContact = () => {
    if (window.confirm("You have to Logout!")) {
      alert("You Are logged_out from the system.");
      setSession(0);
      navigate("/Contact");
    }
  };
  return (
    <div>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10">Courses</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-500 text-xl">
                  Student
                  <br />
                  connected
                  <CountUp
                    start={0}
                    end={lenAll}
                    duration={2.75}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span
                          className="font-bold  text-gray-500"
                          ref={countUpRef}
                        />
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="h-100 border-l mx-4"></div>
                <div className="flex flex-nowrap -space-x-3">
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center gap-x-2">
                <button
                  onClick={handleClickContact}
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="bi bi-chat-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                  </svg>
                </button>

                <button
                  onClick={handleClickContact}
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                >
                  Message
                </button>
              </div> */}
            </div>

            <hr className="my-10" />

            <div className="grid grid-cols-2 gap-x-20">
              <div>
                <h2 className="text-2xl font-bold mb-4">Status</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <div className="p-4 bg-green-100 rounded-xl">
                      <div className="font-bold text-xl leading-none">BCA</div>
                      <div className="mt-2 ">
                        <CountUp
                          start={0}
                          end={lenBca}
                          duration={2.75}
                          separator=","
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=" Students"
                          onEnd={() => console.log("Ended! 👏")}
                          onStart={() => console.log("Started! 💨")}
                        >
                          {({ countUpRef, start }) => (
                            <div>
                              <span
                                className="font-bold text-gray-500"
                                ref={countUpRef}
                              />
                            </div>
                          )}
                        </CountUp>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 col-span-2 bg-blue-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">B.COM</div>
                    <div className="mt-2">
                      <CountUp
                        start={0}
                        end={lenBcom}
                        duration={2.75}
                        separator=","
                        decimals={0}
                        decimal=","
                        prefix=""
                        suffix=" Students"
                        onEnd={() => console.log("Ended! 👏")}
                        onStart={() => console.log("Started! 💨")}
                      >
                        {({ countUpRef, start }) => (
                          <div>
                            <span
                              className="font-bold text-gray-500"
                              ref={countUpRef}
                            />
                          </div>
                        )}
                      </CountUp>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                      <div className="font-bold text-xl leading-none">BBA</div>
                      <div className="mt-2">
                        <CountUp
                          start={0}
                          end={lenBba}
                          duration={2.75}
                          separator=","
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=" Students"
                          onEnd={() => console.log("Ended! 👏")}
                          onStart={() => console.log("Started! 💨")}
                        >
                          {({ countUpRef, start }) => (
                            <div>
                              <span
                                className="font-bold text-gray-500"
                                ref={countUpRef}
                              />
                            </div>
                          )}
                        </CountUp>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Active Courses Available
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">BCA</div>
                      <div className="text-gray-400 text-xs">4d</div>
                    </div>
                    <h2
                      // onClick={handleClickCourses}
                      to="/Courses"
                      className="font-bold hover:text-blue-800 hover:underline"
                    >
                      Full-stack Web-Development
                    </h2>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Deadline is today
                    </div>
                  </div>
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">B.COM</div>
                      <div className="text-gray-400 text-xs">7d</div>
                    </div>
                    <h2
                      // onClick={handleClickCourses}
                      to="/Courses"
                      className="font-bold hover:text-blue-800 hover:underline"
                    >
                      Business Accounting and Taxation
                    </h2>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Deadline will be tomorrow
                    </div>
                  </div>
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">BBA</div>
                      <div className="text-gray-400 text-xs">2h</div>
                    </div>
                    <h2
                      // onClick={handleClickCourses}
                      to="/Courses"
                      className="font-bold hover:text-blue-800 hover:underline"
                    >
                      Business Analytics
                    </h2>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Deadline till this month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
