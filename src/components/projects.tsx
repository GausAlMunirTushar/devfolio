import ProjectCard from "./project-card"

const Projects = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default Projects