import { useContext } from "react";
import { PortfolioContextAPI } from "../../../Context-API/PortfolioContext";
import LargeProjects from "./Large-Projects/LargeProjects";
import SmallProjects from "./Small-Projects/SmallProjects";

const AllProjects = () => {

  const { LargeProjectsAPI } = useContext(PortfolioContextAPI);
  const { SmallProjectsAPI } = useContext(PortfolioContextAPI);
 
  return (
    <>
      <div className="flex justify-between mb-7 mt-3 p-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl">
            <span className="text-[#C778DD]">#</span>Projects
          </h1>
          <div className="h-0.5 border mt-2.5 border-[#C778DD] md:w-[510px] w-[190px]"></div>
        </div>
      </div>

      {LargeProjectsAPI && SmallProjectsAPI.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg text-[#C778DD]"></span>
        </div>
      ) : (
        <section>

          <div className="border border-[#ABB2BF] w-full"></div>
          <div className="border border-[#ABB2BF] w-full"></div>
          <div className="border border-[#ABB2BF] w-full"></div>

          <LargeProjects />

          <div className="border border-[#ABB2BF] w-full"></div>
          <div className="border border-[#ABB2BF] w-full"></div>
          <div className="border border-[#ABB2BF] w-full"></div>

          <SmallProjects />

          <div className="border border-[#ABB2BF] w-full"></div>
          <div className="border border-[#ABB2BF] w-full"></div>
          <div className="border border-[#ABB2BF] w-full mb-14"></div>

        </section>
      )}
    </>
  );
};

export default AllProjects;