/* -------------------------- */
/* Project  : React Portfolio */
/* File     : App.js          */
/* Author   : Vicente Garcia  */
/* Date     : 06/24/2022      */
/* Modified : 06/26/2022      */
/* -------------------------- */
// Import React module
import React, { useState } from 'react';
// Import Header component
import Header from './components/Header';
// Import About component
import About from './components/About';
// Import Portfolio component
import Portfolio from './components/Portfolio';
// Import Contact component
import ContactForm from './components/Contact';
// Import Resume component
import Resume from './components/Resume';
// Import Footer component
import Footer from './components/Footer';
// Main function (root)
function App() {
  // Declare section selectors
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <header>
        <Header
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Header>
      </header>
      <main>
        <div>
          {!portfolioSelected ? (
            <>
              {!contactSelected ? (
                <>
                  {!resumeSelected ? (
                    <>
                      <About></About>
                    </>
                  ) : (
                    <Resume></Resume>
                  )}
                </>
              ) : (
                <ContactForm></ContactForm>
              )}
            </>
          ) : (
            <Portfolio></Portfolio>
          )}
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
};
// Export App
export default App;
