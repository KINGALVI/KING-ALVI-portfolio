import { useContext } from "react";
import Pink_line from "../../../../public/Images/Line-7.png";
import { PortfolioContextAPI } from "../../../Context-API/PortfolioContext";
import { Link } from "react-router-dom";

const Projects = () => {
  const { projectsAPI } = useContext(PortfolioContextAPI);

  return (
    <section className="p-4">
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl">
            <span className="text-[#C778DD]">#</span>Projects
          </h1>
          <img className="mt-2.5" src={Pink_line} alt="Pink Line" />
        </div>
      </div>

      {projectsAPI.length === 0 ? (
        <p className="text-gray-400">Loading projects...</p>
      ) : (
        <section>
          <h1 className="text-4xl mb-7 text-[#ABB2BF]">
            <span className="text-[#C778DD]">#</span>Complete-Apps
          </h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectsAPI.map(project => (
              <div className="hover-3d">
                <div
                  key={project.id}
                  className="hover-card grid items-center bg-[#2C2F36] rounded-lg shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:scale-105 border-2 border-[#ABB2BF]"
                >
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="w-full h-full"
                  />
                  <span className="border border-[#ABB2BF]"></span>
                  <h2 className="text-xl font-semibold m-4 mt-3">{project.projectName}</h2>
                  <span className="border border-[#ABB2BF]"></span>
                  <h3 className="text-lg font-semibold m-4 mt-3 text-[#C778DD]">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 m-4 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-[#1E2127] text-[#ABB2BF] border border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="border border-[#ABB2BF]"></span>
                  <p className="text-sm text-gray-400 line-clamp-3 m-4">
                    {project.detailInfo.slice(0, 100)}...<Link to={`/PojectsDetail/${project.id}`}
                      className="text-[#C778DD] hover:underline"
                    >Read More</Link>
                  </p>
                  <span className="border border-[#ABB2BF]"></span>
                  <div className="flex gap-3 justify-center p-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                    >
                      Live
                    </a>

                    <Link
                      to={`/PojectsDetail/${project.id}`}
                      className="px-4 py-2 rounded-md bg-[#2C2F36] text-[#C778DD] border border-[#C778DD] transition-all duration-300 hover:bg-[#C778DD] hover:text-white hover:shadow-lg hover:-translate-y-1"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Projects;