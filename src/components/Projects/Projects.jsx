import React from "react";
import ProjectCard from "./ProjectCard";
import weather from "../../assets/weather.jpg";
import chatimg  from "../../assets/chatapp.avif"
import whatsappimg  from "../../assets/whatsapp.avif"
import reactimg from "../../assets/react.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
      
         <ProjectCard
          title="Chat App"
          main="
A chat app with WebSockets and React enables real-time, bidirectional communication between users, delivering instant message updates without page refreshes"
           demolink="  https://manpreet-chat-ajay767.vercel.app/"
           sourcecodelink="https://github.com/manpreet244/chat-app"
           cardimg={chatimg}
        />
         <ProjectCard
          title="Whatsapp Clone"
          main="this is a whatsapp clone made using react , firebase with chat feature using react reducer hook and context APIs , "
          sourcecodelink="https://github.com/manpreet244/whatsapp-clone"
          demolink="https://whatsapp-clone-rho-bice.vercel.app/"
          cardimg={whatsappimg}
        />
        <ProjectCard
          title="IMDB Clone"
          cardimg={reactimg}
          main="A TMDb clone using the TMDb (The Movie Database) API is a web app that replicates core IMDb features, like displaying movies, TV shows, ratings, and reviews. Leveraging the TMDb API,"
          demolink=" https://movies-app-sigma-ten.vercel.app/"
        />
        <ProjectCard
          title="Weather App"
          main="this is a bloggin website created in next js and used some component library used some component library"
           demolink="  https://react-nice-weather.netlify.app/"
           cardimg={weather}
        />
      
      </div>
    </div>
  );
};

export default Projects;