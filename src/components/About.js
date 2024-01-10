import React from "react";
import images from "../image/About/univer.jpg";
import Acadmic from "../image/About/Acadmic.jpg";
import { Link } from "react-router-dom";

import campusn from "../image/About/campusn.jpg";
import staff from "../image/About/staff.png";
import Award from "../image/About/Award.jpg";
import Faculty1 from "../image/Faculty/MANYA.jpg";
import Faculty2 from "../image/Faculty/MEHUL.jpg";
import Faculty3 from "../image/Faculty/SWAPNIL.png";

export default function About(Session) {
  return (
    <div className="">
      <div>
      {/* {Session === 1 ? (
              <Link
              class="text-indigo-900 m-5 inline-flex mt-10 "
              to="/Profile"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                />
                </svg>
              Back To Profile
            </Link>
        ) : (
    ""
        )} */}
    
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={images}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                History
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                College is a term that has several different uses; most often it
                is used in the context of post-secondary education, either to
                describe an entire certificate or degree granting institution,
                or a sub-division within a larger organization. In the past,
                colleges were subsumed within a university system, operating
                more as the home for students and providing training. The
                university was the body which granted the degree after students
                completed their time of study and satisfied requirements,
                usually involving examinations, set by the university.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Academics
              </h1>

              <p className="mb-8 leading-relaxed text-justify">
                Academic articles are written by professionals in a given field.
                They are edited by the authors' peers and often take years to
                publish. Their language is formal and will contain words and
                terms typical to the field. The authors name will be present, as
                will their credentials. There will be a list of references that
                indicate where the author obtained the information s/he is using
                in the article. Academic articles can be found in periodicals
                similar to the Journal of Psychology, Childhood Education or The
                American Journal of Public Health
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={Acadmic}
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={campusn}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Campus life
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                My college campus is the place where I spend most of my day
                times. I love that place a lot and I have lots of friends there.
                Whenever we get leisure time in the college period, we hang out
                on the campus. There is a big college canteen where we get every
                type of food. The entire campus has around ten buildings. Each
                building is having own department. There is a friendly
                environment in the campus and anyone can go to any building,
                there is not any restriction. This is a very good and amazing
                place to spend time. I love my campus a lot.
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Academics
              </h1>

              <p className="mb-8 leading-relaxed text-justify">
                Academic articles are written by professionals in a given field.
                They are edited by the authors' peers and often take years to
                publish. Their language is formal and will contain words and
                terms typical to the field. The authors name will be present, as
                will their credentials. There will be a list of references that
                indicate where the author obtained the information s/he is using
                in the article. Academic articles can be found in periodicals
                similar to the Journal of Psychology, Childhood Education or The
                American Journal of Public Health
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={staff}
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={Award}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Awards and honors,
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                Share some of the awards and honors your college has received.
                This shows prospective students that your college is respected
                and recognized for its <br />
                Include some key statistics about your college, such as
                enrollment size, graduation rate, and average SAT/ACT scores.
                This will help prospective students get a better sense of what
                your college is like.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <dh-component>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                SUPPORTING TEAM
              </p>
              <h1 className="xl:text-4xl  text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Organization
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32 transform hover:scale-105 transition duration-500">
                        <img
                          src={Faculty3}
                          alt="Display Picture of SWAPNIL PATIL"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        SWAPNIL PATIL
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Team Lead
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to
                        establish an atmosphere that promotes knowledge sharing
                        and collaboration.a professional in charge of guiding.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32 transform hover:scale-105 transition duration-500">
                        <img
                          src={Faculty2}
                          alt="Display Picture of Dr. Mehul P. Desai"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Dr. Mehul P. Desai
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Product Design Head
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The emphasis on innovation and technology in our
                        companies has resulted in a few of them establishing
                        global benchmarks in product design and development.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32 transform hover:scale-105 transition duration-500">
                        <img
                          src={Faculty1}
                          alt="Display Picture of Dr.Manish M.Kayasth"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Dr.Manish M.Kayasth
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Manager Development
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Our services encompass the assessment and repair of
                        property damage caused by water, fire, smoke, or mold.
                        We can also be a part of the restoration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dh-component>
      </div>
    </div>
  );
}
