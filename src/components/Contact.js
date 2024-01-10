import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const navigate = useNavigate();
  const [Form, setForm] = useState();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/cont", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();
    // console.log(data);
    if (data.Status === true) {
      // alert("Student Added Successfully.");
      Swal.fire({
        icon: "success",
        title: ` Message Sent Successfully.`,
        text: `Sent by ${Form.fname}.`,
      });
      navigate("/");
    } else {
      // alert("Something went wrong!!..");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
      setForm({});
    }
  };
  return (
    <>
      {/* <div className="flex justify-center items-center w-screen h-screen bg-white"> */}
      <div className="container  mx-auto my-4 px-4 lg:px-20">
        <div className="w-full   p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-2xl sm:text-5xl">
              Send us a <br /> message
            </h1>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                onChange={handleChange}
                name="fname"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                onChange={handleChange}
                name="lname"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                required
              />
              <input
                onChange={handleChange}
                name="email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                onChange={handleChange}
                name="phone"
                className="border border-1 border-black w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="phone"
                maxLength="10"
                minLength="10"
                placeholder="Phone*"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                onChange={handleChange}
                name="message"
                placeholder="Message*"
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-700 rounded-2xl">
          <div className="flex flex-col text-white">
            <h1 className="font-bold uppercase text-4xl my-4">
              Drop in our office
            </h1>
            <p className="text-gray-400">
              We enable SMEs in making the best use of emerging digital
              technologies to build stronger capabilities & seize growth
              opportunities in today’s ever-evolving digital economy.
            </p>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-400">
                  Shop No. 301, Central Bazar, Vesu, Surat - 395007
                </p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: 22-1234-5678</p>
                <p className="text-gray-400">Fax: 44-123-4567 </p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <a
                href="https://twitter.com/ASK_DEVELOPERS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
              </a>

              <a
                href="https://github.com/webdev0101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
