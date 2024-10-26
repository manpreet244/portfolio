import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:manpreetkaurs772@gmail.com">Send me an Email</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/manpreet-kaur-746478212/">Linkedin</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
         <a href="https://github.com/manpreet244/">Github </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaYoutube/>
         <a href="https://www.youtube.com/@Manpreetkaur-xr7cg">YouTube </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;