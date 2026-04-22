import { ReactNode } from "react";

interface SkillProps {
    skils: {
        name: string;
        icon: ReactNode;
    };
}

const SkillCard = ({ skils }: SkillProps) => {
    return (
        <div className="w-40 m-2 border border-gray-300 flex flex-col items-center py-4 space-y-2">
            <span>{skils.name}</span>
            <p className="text-2xl">{skils.icon}</p>
        </div>
    )
}

export default SkillCard