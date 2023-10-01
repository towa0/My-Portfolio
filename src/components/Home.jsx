import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import TypingEffect from "../Typetext";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#ffffff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#49e01f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-900">
          Kyran Janssen
        </h1>
        <h3 className="text-4xl sm:text-7xl font-bold text-gray-900">
          I'm a{" "}
          <span className="text-[#49e01f]">
            <TypingEffect />
          </span>
        </h3>
        <p className="text-gray-900 py-4 max-w-[700px]">
          I'm a front-end developer specializing in building exceptional digital
          experiences primarily using ReactJS. My focus is on creating
          responsive front-end and (occasionally) full-stack web applications.
        </p>
        <div>
          <a className="inline-block">
            <button className="text-gray-900 group border-2 px-6 py-3 my-3 flex items-center hover:border-[#49e01f]">
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
