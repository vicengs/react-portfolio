/* -------------------------- */
/* Project  : React Portfolio */
/* File     : Footer/index.js */
/* Author   : Vicente Garcia  */
/* Date     : 06/25/2022      */
/* Modified : 06/25/2022      */
/* -------------------------- */
// Import react module
import React from 'react';
// Function to get footer
const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <a href="https://github.com/vicengs" target="_blank" rel="noreferrer">
        <img
        src={require(`../../assets/images/Github.ico`)}
        alt="Github Vicente"
        className="mx-1 mb-0 icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/vicentegarciasepulveda/" target="_blank" rel="noreferrer">
        <img
        src={require(`../../assets/images/Linkedin.ico`)}
        alt="Linkedin Vicente"
        className="mx-1 icon"
        />
      </a>
      <a href="https://twitter.com/vicengs" target="_blank" rel="noreferrer">
        <img
        src={require(`../../assets/images/Twitter.ico`)}
        alt="Linkedin Vicente"
        className="mx-1 icon"
        />
      </a>
    </footer>
  );
};

export default Footer;