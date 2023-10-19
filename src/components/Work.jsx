import React from "react";
import WorkImg from "../assets/Rentigo.png";
import myCompany from "../assets/WorkImg2.png";
import DataPulse from "../assets/data_pulse.png";
import WeatherApp from "../assets/WeatherApp.png";

const Work = () => {
  return (
    <div name="work" className="md:h-screen text-gray-900 bg-[#ffffff] w-full">
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-[#4594fd]">
            My projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/*Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid item */}
          <div
            style={{
              backgroundImage: `url(${WorkImg})`,
            }}
            className="shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Rentigo
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://polite-fairy-dfd71f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/towa0/Rentigo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid item */}
          <div
            style={{ backgroundImage: `url(${myCompany})` }}
            className="shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Janssen Enterprise
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://funny-trifle-c1d983.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/towa0/Janssen_Enterprise"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DataPulse})` }}
            className="shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                DataPulse
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://sunny-muffin-57a601.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/towa0/Data_Pulse_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
