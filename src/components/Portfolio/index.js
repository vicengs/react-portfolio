/* ----------------------------- */
/* Project  : React Portfolio    */
/* File     : Portfolio/index.js */
/* Author   : Vicente Garcia     */
/* Date     : 06/25/2022         */
/* Modified : 06/26/2022         */
/* ----------------------------- */
// Import react module
import React from 'react';
// Import Project component
import Project from '../Project';
// Function to show portfolio
function Portfolio() {
  return (
    <section className="my-1">
      <h1 id="portfolio">Portfolio</h1>
      <Project></Project>
    </section>
  );
}
// Export portfolio
export default Portfolio;