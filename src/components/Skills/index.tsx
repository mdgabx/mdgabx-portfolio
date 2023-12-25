import { useEffect, useState } from "react"
import axios from "axios"
import { Oval } from "react-spinner-loader"

interface SkillsProp {
    id: number;
    name: string;
    logo: string;
}

const Skills = () => {

    const [skills, setSkills] = useState<SkillsProp[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('skills.json')
                setSkills(response.data.skills)
            } catch (err) {
                console.error(err)
            }
        }

        fetchData();
    }, [])
    
    return (
        <div className="w-3/4 flex flex-col mx-auto items-center justify-center">
            <div className="flex flex-col bg-white shadow-md shadow-black my-10 p-5 border-2 rounded-lg">
                <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">Technologies and Frameworks</h2>
                <div className="p-2 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.isArray(skills) && skills.length > 0 ? (
                    skills.map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center justify-center font-quicksand px-4">
                        <img src={`../src/assets/logos/${skill.logo}`} alt={skill.logo} width="60px" height="50px"  />
                        <p className="my-2 mx-auto">{skill.name}</p>
                    </div>
                    ))
                ) : (
                    // <div>Error Fetching skills data!</div>
                    <Oval
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                    />
                )}
                </div>
            </div>
        </div>
    )
}

export default Skills