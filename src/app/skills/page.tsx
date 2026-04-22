import skills from "@/data/skills"
import SkillCard from "@/components/SkillCard"

export const metadata = {
    title: "Skills",
    description: "",
}

const SkillsPage = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-center text-xl font-semibold my-4">My Skills</h1>
            <div className="flex items-center justify-center ">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skils={skill} />
                ))}
            </div>
        </div>
    )
}

export default SkillsPage