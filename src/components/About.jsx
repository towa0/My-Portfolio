import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#ffffff] text-gray-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4594fd]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm <span className="text-[#4594fd]">Kyran</span>, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a passionate about building excellent websites that improves
              the lives of those around me. I specialize in creating websites
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a website dev available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
