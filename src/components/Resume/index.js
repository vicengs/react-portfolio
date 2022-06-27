/* -------------------------- */
/* Project  : React Portfolio */
/* File     : Resume/index.js */
/* Author   : Vicente Garcia  */
/* Date     : 06/25/2022      */
/* Modified : 06/26/2022      */
/* -------------------------- */
// Import react module
import React from 'react';
// Function to show Resume section
function Resume() {
  // Return JSX for Resume
  return (
    <section className="my-1">
      <h1 id="resume">Resume</h1>
      Download my<a href={require(`../../assets/Vicente_Garcia.pdf`)} download="Vicente Garcia Sepulveda"> Resume</a>
      <div className="my-2">
        <h4>Programing</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>API's</li>
            <li>Node</li>
            <li>Rest</li>
        </ul>
        <h4>Databases</h4>
        <ul>
            <li>Oracle PL/Sql</li>
            <li>SQL Server</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
        </ul>
        <h4>Version Control Systems</h4>
        <ul>
            <li>SVN</li>
            <li>Git</li>
            <li>Github</li>
            <li>Plastic</li>
        </ul>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};
// Export Resume component
export default Resume;