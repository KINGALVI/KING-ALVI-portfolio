import Pink_line from "../../../../public/Images/Line-7.png"

const Projects = () => {

    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl"><span className="text-[#C778DD]">#</span>Projects</h1>
                    <div>
                        <img className="mt-2.5" src={Pink_line} alt="Pink Line" />
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    );
};

export default Projects;