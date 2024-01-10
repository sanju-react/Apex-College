import React from "react";
import { Link } from "react-router-dom";

import imgbba from "../image/Courses/imgbba.jpg";
import imgbba3 from "../image/Courses/imgbba3.avif";
import imgbba4 from "../image/Courses/imgbba4.avif";
import imgbba2 from "../image/Courses/imgbba2.avif";

export default function Bba() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-2 py-5 mx-auto flex flex-col">
          <div class="lg:w-[90%] mx-auto">
            <div class="rounded-lg overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-[50vh] w-full"
                src={imgbba2}
              />
            </div>
            <h1 class="title-font mt-5 w-full text-center sm:text-4xl text-3xl font-medium text-gray-900">
              Bachelor of Business Administration (BBA)
            </h1>
            <div class="w-full">
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-2 py-5 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="mb-8 leading-relaxed text-justify ">
                      <strong class="text-xl text-blue-600">
                        History &gt;&gt;
                      </strong>{" "}
                      Bachelor of Business Administration—essentially a
                      bachelor's degree you can earn to prepare for the business
                      world. Many students who earn a BBA choose to go into
                      management or start their own businesses. However, many
                      others may use the degree as a starting point for a career
                      in a field like marketing, accounting, finance, real
                      estate, or even education. You may find your BBA program
                      doesn't just focus on business administration. Instead, it
                      allows you to specialize in an area like marketing, health
                      care, accounting, or management so you're better equipped
                      to work in those industries. A great number of four-year
                      universities and colleges offer BBA degrees, and many of
                      them even have online programs.
                    </p>
                  </div>
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="object-cover object-center rounded"
                      alt="imgbba"
                      src={imgbba}
                    />
                  </div>
                </div>
              </section>
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-2 py-5 md:flex-row flex-col items-center">
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                      class="object-cover object-center rounded"
                      alt="imgbba"
                      src={imgbba3}
                    />
                  </div>
                  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p class="mb-8 leading-relaxed text-justify">
                      <strong class="text-xl text-blue-600">
                        Eligibility Criteria &gt;&gt;
                      </strong>{" "}
                      In addition, the Bachelor ofBusiness Administration (BBA)
                      is a bachelor's degree that helps you establish a
                      fundamental understanding of business and how various
                      aspects of it apply to the real world. It's a well-rounded
                      degree currently in high demand because it's so versatile.
                      Not only can you strengthen the skills you'll need to
                      succeed in the business world—like communication and
                      leadership—with this degree, but you can also prepare
                      yourself to work in dozens of other industries. For
                      example, many people choose to earn a BBA if they want to
                      move up into a management position B.Com Banking
                      Management and BCom Banking and Insurance include the
                      concepts of commerce and trades or businesses. The course
                      focuses on understanding financial accounting, financial
                      management, business management, statistics, etc B.Com
                      with CA is divided into six semesters and includes various
                      topics such as financial accounting, economics, corporate
                      tax, company law, auditing, business management, etc.
                    </p>
                    <div class="flex w-full md:justify-start justify-center items-end"></div>
                  </div>
                </div>
              </section>
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-2 py-5 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="mb-8 leading-relaxed text-justify">
                      <strong class="text-xl text-blue-600">
                        Admission &gt;&gt;
                      </strong>{" "}
                      Business Administration (MBA) degree. A degree in business
                      administration can open doors. It looks good on your
                      resume, and it can arm you with the tools you'll need to
                      succeed in business, whether you want a new career in a
                      new industry, to become an entrepreneur, or simply go for
                      a promotion within the company where you work now. A
                      Bachelor ofBusiness Administration (BBA) is a bachelor's
                      degree that helps you establish a fundamental
                      understanding of business and how various aspects of it
                      apply to the real world. It's a well-rounded degree
                      currently in high demand because it's so versatile. Not
                      only can you strengthen the skills you'll need to succeed
                      in the business world—like communication and
                      leadership—with this degree, but you can also prepare
                      yourself to work in dozens of other industries. For
                      example, many people choose to earn a BBA if they want to
                      move up into a management position.
                    </p>
                  </div>
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="object-cover object-center rounded"
                      alt="imgbba"
                      src={imgbba4}
                    />
                  </div>
                </div>
              </section>
              <div className="flex justify-between">
                <Link
                  class="text-indigo-900 inline-flex mt-3 disabled"
                  to="/Bcom"
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
                  B.COM
                </Link>
                <Link
                  class="text-indigo-900 inline-flex mt-3 disabled"
                  to="/Bca"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
