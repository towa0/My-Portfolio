import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#e1ea63]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kyran Janssen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e1ea63]">
          I'm a Front End developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front-end developer specializing in building exceptional digital
          experiences primarily using ReactJS. My focus is on creating
          responsive front-end and (occasionally) full-stack web applications.
        </p>
        <div>
          <a className="inline-block">
            <button className="text-white group border-2 px-6 py-3 my-3 flex items-center hover:border-[#e1ea63]">
              <Link to="work" smooth={true} duration={500}>
                View work
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
