

const Skills = () => {
    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "TailwindCSS",
        "Node",
        "Bootstrap",
        "ReactJS",
        "MongoDB"
    ]
    
    return (
        <div className="w-3/4 flex flex-col mx-auto items-align justify-center">
            <div className="flex flex-col bg-white shadow-md shadow-black my-10 p-5 border-2 rounded-lg">
                <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">Technologies and Frameworks</h2>
                <div>
                    {
                    skills.map((skill) => (
                        <div key={skill} className="font-quicksand"> { skill }</div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills