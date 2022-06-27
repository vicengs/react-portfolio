/* -------------------------- */
/* Project  : React Portfolio */
/* File     : About/index.js  */
/* Author   : Vicente Garcia  */
/* Date     : 06/24/2022      */
/* Modified : 06/26/2022      */
/* -------------------------- */
// Import react module
import React from 'react';
// Function to show About section
function About() {
  // Return JSX for About
  return (
    <section>
      <h1 id="about">About Me</h1>
      <div className="flex-photo">
        <img
          src={require(`../../assets/images/Vicente.jpg`)}
          alt="Vicente Garcia Sepulveda"
          className="avatar mx-1"
        />
      </div>
      <p>IT professional with demonstrated success in programming, troubleshooting, and in the leadership of technical teams.  Solid experience in the technical infrastructure of the insurance industry and in the delivery of business services.</p>
      <p>When I worked for IBM for 1 year as an Application Consultant and then 2 years as a Project Manager, I was responsible for managed a team of business system analysts and programmers in the attention a client in different Central America Countries. Led and help to the team to create new applications and maintains the system and troubleshooting. When I worked for Mapfre Insurance as a Developer, Analyst and then as Project Leader I was responsible for managed different projects at the same time with a team of analysts and developers. Designed programmed and implemented a whole process to improve into the company to issue insurance policies massively, it means a big volume of them per day, about 20k all this in Oracle PL/SQL and Java. Expert at finding solutions to technical problems.</p>
      <p>Currently studying to earn a certificate in full stack development from the Texas University Coding, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Also, I have a bachelor’s degree in IT and a master’s degree in IT Management.</p>
      <br></br>
    </section>
  );
};
// Export About component
export default About;