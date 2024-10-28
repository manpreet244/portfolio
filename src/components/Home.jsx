
import React from "react";
import TextChange from "./Projects/TextChange";
import myphotobg from "../assets/photomy2.png";


const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 xs:p-20">
        <h1 className="text-xl md:text-6xl md:pl-24 font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Full Time Learner | Frontend Developer | DSA | Java
        </p>
       <div className="sm:flex sm:flex-col xs:flex xs:flex-col md:flex md:flex-row md:justify-center md:gap-4 xs:gap-2">
         <button className="mt-5 md:md-10 text-white py-2 mx-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer">Contact Me</a>
        </button>
        <button className="mt-5 ml-4md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="https://drive.google.com/file/d/1Yh41av4er8ODnUSNWOOelogeQQpMGg_5/view">See My Resume</a>
        </button>
       </div>
      </div>
      <div>
        <img className="md:h-80 md:pr-20 h-52 rounded-lg xs:w-[50px]" src={myphotobg} alt="" />
      </div>
    </div>
  );
};
export default Home;