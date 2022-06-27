/* ----------------------------- */
/* Project  : React Portfolio    */
/* File     : Project/index.js */
/* Author   : Vicente Garcia     */
/* Date     : 06/26/2022         */
/* Modified : 06/26/2022         */
/* ----------------------------- */
// Import react module
import React, { useState } from 'react';
function Project() {
  const [projects] = useState([
    {
      href: "https://immense-scrubland-37452.herokuapp.com/"
     ,src: "Tech-Blog"
     ,alt: "Tech Blog"
     ,github: "https://github.com/vicengs/Tech_Blog"
    },
    {
      href: "https://secret-coast-34340.herokuapp.com/"
     ,src: "Videogames-Chat"
     ,alt: "Video Games Chatrooms Project"
     ,github: "https://github.com/vicengs/Video-Game-Chats"
    },
    {
      href: "https://vicengs.github.io/Run_Buddy/"
     ,src: "Run-Buddy"
     ,alt: "Run Buddy"
     ,github: "https://github.com/vicengs/Run_Buddy"
    },
    {
      href: "https://vicengs.github.io/Super-Hero-Wiki/"
     ,src: "Super-Hero-Wiki"
     ,alt: "Super Hero Wiki Project"
     ,github: "https://github.com/vicengs/Super-Hero-Wiki"
    },
    {
      href: "https://vicengs.github.io/Weather_Dashboard/"
     ,src: "Weather-Dashboard"
     ,alt: "Weather Dashboard"
     ,github: "https://github.com/vicengs/Weather_Dashboard"
    },
    {
      href: "https://vicengs.github.io/Work_Day_Scheduler/"
     ,src: "Work-Day-Scheduler"
     ,alt: "Work Day Scheduler"
     ,github: "https://github.com/vicengs/Work_Day_Scheduler"
    }
  ]);
  return (
    <section className="my-1">
      <div className="d-flex flex-row">
        {projects.map((project) => (
          <a href={project.href} target="_blank" rel="noreferrer">
            <a href={project.github} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/images/Project_Github.ico`)}
                alt="Github Vicente"
                className="mx-1 mb-0 icon"
              />
            </a>
            <img
              src={require(`../../assets/images/${project.src}.jpg`)}
              alt={project.alt}
              className="img-thumbnail mx-1"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
export default Project;