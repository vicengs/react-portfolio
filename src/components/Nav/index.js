/* -------------------------- */
/* Project  : React Portfolio */
/* File     : Nav/index.js    */
/* Author   : Vicente Garcia  */
/* Date     : 06/24/2022      */
/* Modified : 06/26/2022      */
/* -------------------------- */
// Import react module
import React from 'react';
// Nav section
function Nav(props) {
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
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {setAboutSelected(true); setPortfolioSelected(false); setContactSelected(false); setResumeSelected(false)}}>About Me</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => {setPortfolioSelected(true); setAboutSelected(false); setContactSelected(false); setResumeSelected(false)}}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {setContactSelected(true); setAboutSelected(false); setPortfolioSelected(false); setResumeSelected(false)}}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {setResumeSelected(true); setAboutSelected(false); setContactSelected(false); setPortfolioSelected(false)}}>Resume</span>
          </li>
        </ul>
      </nav>
  );
}
// Export Navigator component
export default Nav;