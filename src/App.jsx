import { useContext, useEffect } from "react";
import "./App.css";
import React_Router from "./Router/React_Router";
import { PortfolioContextAPI } from "./Context-Api/PortfolioContext.jsx";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const { LargeProjectsAPI, SmallProjectsAPI } = useContext(PortfolioContextAPI);

  useEffect(() => {
    AOS.init({
      duration: 1000,   // how long the animation runs
      once: false,      // 👈 allow animations to trigger every time
      mirror: true      // 👈 animate out when scrolling past, so they reset
    });
  }, []);

  return (
    <>
      {(!LargeProjectsAPI.length && SmallProjectsAPI.length === 0) ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg text-[#C778DD]"></span>
        </div>
      ) : (
        <section data-aos="fade-up"> {/* AOS animation */}
          <React_Router />
        </section>
      )}
    </>
  );
}

export default App;