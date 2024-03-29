import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#ffffff] text-gray-900 font-bold">
      <div>
        <div
          className="text-xl font-bold text-black hover:text-[#4594fd] cursor-pointer"
          style={{ fontSize: "2rem" }}
        >
          KJ
        </div>
      </div>

      <ul className="hidden md:flex">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-[#4594fd]"
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-[#4594fd]"
        >
          <li>About</li>
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:text-[#4594fd]"
        >
          <li>Skills</li>
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="hover:text-[#4594fd]"
        >
          <li>Work</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-[#4594fd]"
        >
          <li>Contact</li>
        </Link>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#fbfbfb] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/towa0/"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kyran-janssen-551b31193/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1auk7L8R05PXcXYM9utf6BjKGToMIhaKk/view"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
