import Projects from "@/components/projects"

export const metadata = {
    title: "Personal Projects",
}

const ProjectsPage = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-xl my-2 text-center font-bold">Personal Projects</h1>
            <div>
                <Projects />  
            </div>
        </div>
    )
}

export default ProjectsPage