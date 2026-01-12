import { useContext } from "react";
import "./App.css";
import React_Router from "./Router/React_Router";
import { PortfolioContextAPI } from "./Context-Api/PortfolioContext.jsx";

function App() {
  const { LargeProjectsAPI, SmallProjectsAPI } = useContext(PortfolioContextAPI);

  return (
    <>
      {(!LargeProjectsAPI.length && SmallProjectsAPI.length === 0) ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg text-[#C778DD]"></span>
        </div>
      ) : (
        <section className="fade-in-bounce">
          <React_Router />
        </section>
      )}
    </>
  );
}

export default App;