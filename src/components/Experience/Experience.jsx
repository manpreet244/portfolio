import React from "react";
import logo from "../../assets/logo.png"
import logo2 from "../../assets/logo2.png"
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={logo} className="w-12 rounded-lg"/>
            <span className="text-white">
              <h2 className="leading-tight">Open Source Frontend Developer , Curious Ecosystems</h2>
              <p className="text-sm leading-tight font-thin">
                May 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Working as open source developer</li>
           
              </ul>
            </span>
          </div>
          
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img src={logo2} className="w-12 rounded-lg"/>
            <span className="text-white">
              <h2 className="leading-tight">Open Source Contributor</h2>
              <p className="text-sm leading-tight font-thin">
                GirlScript Summer Of Code(GSSOC)
              </p>
              <ul className="text-sm p-2">
                <li>- May-2024- Aug-2024</li>
                <li> Contributed in 3 repositories like Curious-Connect , Vedic Vani , GGExtensions in frontend</li>
             
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;