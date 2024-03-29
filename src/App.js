import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Sign from "./components/Sign";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Error_404 from "./components/Error_404";
import Profile from "./components/Profile";
import Forgotpassword from "./components/Forgotpassword";
import Bca from "./components/Bca";
import Bcom from "./components/Bcom";
import Bba from "./components/Bba";
import Dashboard from "./components/Dashboard";
import Course from "./components/dashboard/Course";
import Notification from "./components/dashboard/Notification";
import Student from "./components/dashboard/Student";
import Message from "./components/dashboard/Message";

function App() {
  const [Session, setSession] = useState(0);
  const [userData, setuserData] = useState();
  // const [AllStudent, getAllStudent] = useState();
  return (
    <>
      <BrowserRouter>
        {Session === 0 ? (
          <Navbar Session={Session} setSession={setSession} />
        ) : (
          ""
        )}
        <div className="Container  mx-auto px-auto overflow-x-hidden no-scrollbar bg-white ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/About" element={<About Session={Session} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route
              path="/Sign"
              element={
                <Sign
                  setuserData={setuserData}
                  Session={Session}
                  setSession={setSession}
                />
              }
            />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Forgotpassword" element={<Forgotpassword />} />

            <Route
              path="/Profile"
              element={
                Session > 0 ? (
                  <Profile
                    Session={Session}
                    userData={userData}
                    setSession={setSession}
                  />
                ) : (
                  <Error_404 />
                )
              }
            />
            <Route
              path="/Dashboard"
              element={
                Session > 0 ? (
                  <Dashboard Session={Session} setSession={setSession} />
                ) : (
                  <Error_404 />
                )
              }
            >
              <Route
                path="/Dashboard/"
                element={<Course Session={Session} setSession={setSession} />}
              />
              <Route
                path="/Dashboard/Student"
                element={
                  <Student
                    // AllStudent={AllStudent}
                    Session={Session}
                    setSession={setSession}
                  />
                }
              />
              <Route
                path="/Dashboard/Message"
                element={<Message Session={Session} setSession={setSession} />}
              />
              <Route
                path="/Dashboard/Notification"
                element={
                  <Notification Session={Session} setSession={setSession} />
                }
              />
            </Route>
            <Route path="/Bca" element={<Bca />} />
            <Route path="/Bcom" element={<Bcom />} />
            <Route path="/Bba" element={<Bba />} />
          </Routes>
        </div>
        {Session === 0 ? <Footer /> : ""}
      </BrowserRouter>
    </>
  );
}

export default App;
