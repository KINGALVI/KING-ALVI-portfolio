import { useEffect, useState } from "react";
import { PortfolioContextAPI } from "./PortfolioContext";

const PortfolioContextAPIProvider = ({ children }) => {
  const [LargeProjectsAPI, setLargeProjectsAPI] = useState([]);
  const [SmallProjectsAPI, setSmallProjectsAPI] = useState([]);

  useEffect(() => {
    fetch('/JSON/My-Portfolio-Large-Projects.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to load Large Projects JSON");
        return res.json();
      })
      .then(data => setLargeProjectsAPI(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('/JSON/My-Portfolio-Small-Projects.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to load Small Projects JSON");
        return res.json();
      })
      .then(data => setSmallProjectsAPI(data))
      .catch(err => console.error(err));
  }, []);

  const value = { LargeProjectsAPI, SmallProjectsAPI };

  return (
    <PortfolioContextAPI.Provider value={value}>
      {children}
    </PortfolioContextAPI.Provider>
  );
};

export default PortfolioContextAPIProvider;