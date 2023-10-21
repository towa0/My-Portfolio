import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import Python from "../assets/python.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";

const skillsData = [
  { icon: HTML, text: "HTML" },
  { icon: CSS, text: "CSS" },
  { icon: JavaScript, text: "JavaScript" },
  { icon: ReactImg, text: "ReactJS" },
  { icon: GitHub, text: "Github" },
  { icon: Tailwind, text: "Tailwind" },
  { icon: Python, text: "Python" },
  { icon: Node, text: "NodeJS" },
  { icon: Mongo, text: "MongoDB" },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#ffffff] text-gray-900">
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#4594fd]">
            Skills
          </p>
          <p className="py-4">
            These are the{" "}
            <span className="text-[#4594fd] font-bold">technologies</span> I've
            worked with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded shadow-md hover:shadow-xl hover:scale-105 duration-200 "
            >
              <img
                className="w-20"
                src={skill.icon}
                alt={`${skill.text} icon`}
              />
              <p className="my-4">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
