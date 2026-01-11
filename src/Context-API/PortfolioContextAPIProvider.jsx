import { useEffect, useState } from "react";
import { PortfolioContextAPI } from "./PortfolioContext";

const PortfolioContextAPIProvider = ({ children }) => {
  const [LargeProjectsAPI, setLargeProjectsAPI] = useState([]);
  const [SmallProjectsAPI, setSmallProjectsAPI] = useState([]);

  useEffect(() => {
    fetch('../../public/JSON/My-Protfolio-Large-Projects.json')
      .then(res => res.json())
      .then(data => setLargeProjectsAPI(data))
  }, []);

  useEffect(() => {
    fetch('../../public/JSON/My-Portfolio-Small-Projects.json')
      .then(res => res.json())
      .then(data => setSmallProjectsAPI(data))
  }, []);

  const value = { LargeProjectsAPI, SmallProjectsAPI };

  return (
    <PortfolioContextAPI.Provider value={value}>
      {children}
    </PortfolioContextAPI.Provider>
  );
};

export default PortfolioContextAPIProvider;