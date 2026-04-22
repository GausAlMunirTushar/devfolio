import Image from "next/image"


const ProjectCard = () => {
    return (
        <div className="w-full border border-gray-200 rounded-lg">
            <Image width={400} height={400} alt="Project 1" src="/projects/project-1.jpg" />
            <div className="px-4">
                <h1 className="text-lg font-semibold my-2">Devolio - Developer Portfolio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, maxime voluptate! Consequatur fugit hic aut minus ipsam nihil ex delectus.</p>
                <div className="my-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">GitHub</button>
                    <button className="border ml-3 border-blue-500 text-blue-500 py-2 px-4 rounded">Live Demo</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard