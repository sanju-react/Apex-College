import React from "react";
import { Link } from "react-router-dom";
import imgbca3 from "../image/Courses/imgbca3.avif";
import imgbca from "../image/Courses/imgbca.avif";
import imgbca4 from "../image/Courses/imgbca4.avif";
import imgbca2 from "../image/Courses/imgbca2.avif";

export default function Bca() {
  return (
    <div>
      <section class=" text-gray-600 body-font">
        <div class="container px-2 py-5 mx-auto flex flex-col">
          <div class="lg:w-[90%] mx-auto">
            <div class="rounded-lg overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-[50vh] w-full"
                src={imgbca2}
              />
            </div>
            <h1 class="title-font mt-5 w-full text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Bachelor of Computer Applications (BCA)
            </h1>
            <div class="w-full">
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-2 py-5 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="mb-8 leading-relaxed text-justify">
                      <strong class="text-xl text-blue-600">
                        History &gt;&gt;
                      </strong>{" "}
                      Bachelor of Computer Applications (BCA) is a 3-year
                      undergraduate degree program in Computer Applications.
                      Their programming languages and problem-solving skills
                      make them valuable industrial assets. BCA students learn
                      computer applications and IT skills to succeed in the
                      field. Theoretically and practically, students learn how
                      to develop software, administer systems, and analyze data.
                      Due to the growth of the IT sector, BCA graduates have
                      good employment opportunities and professional
                      advancement. Students receive comprehensive training in
                      computer applications over the course of three years.
                      Courses include Operating Systems, Java Programming,
                      Computer Networks, Accessing Data Bases, and Programming
                      Languages. Eligibility Criteria:
                    </p>
                  </div>
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="object-cover object-center rounded"
                      alt="hero"
                      src={imgbca3}
                    />
                  </div>
                </div>
              </section>
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-2 py-5 md:flex-row flex-col items-center">
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                      class="object-cover object-center rounded"
                      alt="hero"
                      src={imgbca}
                    />
                  </div>
                  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p class="mb-8 leading-relaxed text-justify">
                      <strong class="text-xl text-blue-600">
                        Eligibility Criteria &gt;&gt;
                      </strong>{" "}
                      BCA students are admitted through merit and entrance
                      tests. Class 12 math marks must be 45–50%., business, or
                      arts stream in order to be eligible for the BCA degree
                      program. Applicants must also be at least 18 years old. In
                      addition to that, they should have completed the necessary
                      amount of mathematics coursework. In order to participate
                      in the BCA program, you need to have a grade point average
                      of at least 35 percent. Course Fee: The course fee for the
                      BCA program can range anywhere from INR 21,000 to INR
                      45,000 per year.Most students pay somewhere in the middle
                      of that range. There is a possibility that each semester’s
                      tuition and fees will be structured differently at some
                      universities. It is essential to be aware that the course
                      price for a standard mode of learning in a bachelor’s
                      degree program in computer applications is often more
                      expensive than the fees for online or distance learning
                      modes of instruction. Entrance Exams:
                    </p>
                    <div class="flex w-full md:justify-start justify-center items-end"></div>
                  </div>
                </div>
              </section>
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-2 md:flex-row flex-col items-center">
                  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p class="mb-8 leading-relaxed text-justify">
                      <strong class="text-xl text-blue-600">
                        Admission &gt;&gt;
                      </strong>{" "}
                      At the point of admission, the majority of standard
                      educational establishments, including colleges and
                      universities, administer examinations at the point of
                      entry for BCA degree programs. Admission to top BCA
                      programmes is based on CUET, SET, IPU CET, MET, and other
                      tests. They evaluate candidates’ relevant knowledge and
                      aptitude. Scope: After this BCA course students can apply
                      as Web Designer, System Manager, Software Developer,
                      Software Developer, software testerComputer Programmer,
                      Web Developer etc. The salary and job designation depend
                      on the student’s abilities and knowledge. With a BCA
                      degree, graduates are well-prepared for IT jobs in
                      software development, system analysis, database
                      administration, web design, and more. If anyone wants to
                      study the BCA degree program without passing the entrance
                      examination, they can do so by applying to the IMTS
                      Institutes.
                    </p>
                  </div>
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="object-cover object-center rounded"
                      alt="hero"
                      src={imgbca4}
                    />
                  </div>
                </div>
              </section>
              <div className="flex justify-between">
                <Link
                  class="text-indigo-900 inline-flex mt-3 "
                  to="/Bca"
                ></Link>
                <Link class="text-indigo-900 inline-flex mt-3" to="/Bcom">
                  B.COM
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
                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
