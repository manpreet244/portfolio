import React from "react";
import about from "../../assets/about.webp";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-secondary shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-[600px] md:w-[600px]" src={about} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-[600px]">
                <h1 className="text-xl md:text-2xl font-semibold text-accent leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-lg leading-tight">
                <li>Built reusable components with React Hooks and Context API for consistent state management across complex user flows.</li>
                <li>Optimized website performance by minifying assets, implementing lazy loading for images, and reducing unused CSS, resulting in a  decrease in page load time.</li>
               <li> Worked with web sockets to implement chat UI in both frontend and bcakend part</li>
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-[600px]">
                <h1 className="text-xl md:text-2xl font-semibold text-accent leading-normal">
                  Youtube Content Creator
                </h1>
                <p className="text-sm md:text-lg leading-tight">
                <li>As a YouTube content creator focused on technical education, </li>
                <li>I create engaging and informative video tutorials for an
                   audience interested in coding, problem-solving, and software 
                   development</li><li> My channel features a variety of content from LeetCode problem-solving sessions to in-depth web development tutorials, aimed at helping viewers improve their 
                coding skills </li>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-[600px]">
                <h1 className="text-xl md:text-2xl font-semibold text-accent leading-normal">
                  Open Source Contributor
                </h1>
                <p className="text-sm md:text-lg leading-tight">
                  <li>At Girlscript Summer of code </li>
                <li>Contributed in some repositories like Curious-Connect , Vedic Vani , GGExtensions in frontend part </li>
                 <li>In Curious-Connect repository , i worked with websockets for real time communication</li>
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;