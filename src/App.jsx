import { useContext, useEffect } from "react";
import "./App.css";
import React_Router from "./Router/React_Router";
import { PortfolioContextAPI } from "./Context-Api/PortfolioContext.jsx";
import { ToastContainer } from "react-toastify";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const { LargeProjectsAPI, SmallProjectsAPI } = useContext(PortfolioContextAPI);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  useEffect(() => {
    if (LargeProjectsAPI.length || SmallProjectsAPI.length) {
      AOS.refreshHard();
    }
  }, [LargeProjectsAPI, SmallProjectsAPI]);


  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />

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