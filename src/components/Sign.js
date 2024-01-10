import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../image/login.jpg";
import userimg from "../image/user.png";
export default function Sign({ Session, setuserData, setSession }) {
  const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [Form, setForm] = useState();
  const [User, setUser] = useState();
  const [Student, setStudent] = useState();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();

    if (data.status === "true" && data.user === "Admin") {
      setSession(1);
      // setUser(data.fname);
      navigate("/Dashboard");
    } else if (data.status === "true" && data.user === "Student") {
      setSession(2);
      const user_data = await fetch("http://localhost:5000/student_profile", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
        method: "POST",
      });
      setuserData(await user_data.json());
      setUser(data.fname);
      // setid(data.id);
      // const response = await fetch("http://localhost:5000/employeeData", {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   method: "POST",
      //   body: JSON.stringify({ email: data.id }),
      // });
      // const UserData = await response.json();
      // setStudent(UserData);
      navigate("/Profile");
    } else {
      alert("Invalid username or password!");
   
    }
  };
  return (
    <>
      <section className="flex flex-col md:flex-row  items-center">
        <div className=" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src={Login}
            alt="Login Images"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6  lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full min-h-100">
            <div className="flex justify-center mb-1">
              <img src={userimg} alt="user-img" className="aspect-auto w-20" />
            </div>
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right my-2">
                <Link
                  to="/Forgotpassword"
                  className="text-sm font-semibold text-blue-500 hover:text-blue-700  focus:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              <button className="block mt-4 w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
                LOGIN
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            {/* <button
              type="button"
              className=" hover:bg-blue-400 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span>
                  <GoogleIcon />
                </span>
                <span className=  "ml-4 ">Log in with Google</span>
              </div>
            </button> */}

            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/Registration"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
