/* -------------------------- */
/* Project  : React Portfolio */
/* File     : Header/index.js */
/* Author   : Vicente Garcia  */
/* Date     : 06/24/2022      */
/* Modified : 06/26/2022      */
/* -------------------------- */
// Import React module
import React from 'react';
// Import Nav component
import Nav from '../Nav';
// Header section
function Header(props) {
  // Deconstruct props
  const {
    aboutSelected
   ,setAboutSelected
   ,portfolioSelected
   ,setPortfolioSelected
   ,contactSelected
   ,setContactSelected
   ,resumeSelected
   ,setResumeSelected
  } = props;
  return (
    <header className="flex-row px-2">
      <h2>
          Vicente Garcia Sepulveda
      </h2>
      <Nav
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
      ></Nav>
    </header>
  );
}
// Export Header component
export default Header;