import { useEffect, useState } from "react";
import { PortfolioContextAPI } from "./PortfolioContext";

const PortfolioContextAPIProvider = ({ children }) => {
  const [projectsAPI, setProjectsAPI] = useState([]);

  useEffect(() => {
    fetch('../../public/JSON/My-Protfolio-Complete-Projects.json')
      .then(res => res.json())
      .then(data => setProjectsAPI(data))
  }, []);

  const value = { projectsAPI };

  return (
    <PortfolioContextAPI.Provider value={value}>
      {children}
    </PortfolioContextAPI.Provider>
  );
};

export default PortfolioContextAPIProvider;