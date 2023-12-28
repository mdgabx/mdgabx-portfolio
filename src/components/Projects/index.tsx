import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

interface ProjectsProp {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    projectUrl: string;
    githubUrl: string;
    image: string;
}

interface ProjectCardProps {
    project: ProjectsProp;
}


const Projects = () => {
    const [projects, setProjects] = useState<ProjectsProp[]>([])

    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('projects.json')
                setProjects(response.data.projects)
            }catch (err) {
                console.error(err)
            }
        }

        fetchProjects();

    }, [])

    const ProjectCard:React.FC<ProjectCardProps> = ({ project }) => {
        return (
            <div className="container">
                <div className="flex flex-col shadow-md rounded w-full p-10 my-4">
                    <div className="flex flex-col gap-5">
                        <img 
                            className="rounded mx-auto" 
                            src={`../src/assets/projects/${project.image}`} 
                            alt={project.name}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className="container-fluid font-quicksand">
                            <h3 className="font-quicksand italic text-xl my-4">{project.name}</h3>
                            <p>{project.description}</p>
                            { project.technologies.map((tech, idx) => {
                                return (
                                    <p key={idx}>{tech}</p>
                                )  
                            })
                            }
                            <div className="flex flex-row items-center justify-evenly gap-5 my-4">
                                <a 
                                href={project.projectUrl} 
                                target="_blank" 
                                className="text-white bg-green-600 rounded-lg p-4 shadow shadow-green-300"
                                >
                                    Project URL
                                    </a>
                                <a href={project.githubUrl} target="_blank"  className="">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid mx-auto flex flex-row items-center justify-center">
                <div className="w-10/12 md:w-8/12 flex flex-col bg-white shadow-md my-10 p-5 border-2 rounded-lg">
                    <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">Projects</h2>
                    <div className="container flex flex-row items-center justify-center mx-auto w-full">
                        { projects.length === 0 ? (
                            <div className="flex items-center justify-center w-100">
                                <ClipLoader
                                    color="#111"
                                    loading={true}
                                    size={40}
                                    aria-label="Loading Spinner"
                                />
                            </div>
                        ) : (
                            <div className="relative flex flex-col" >
                                { projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))
                                }
                            </div>
                        )
                        }                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
