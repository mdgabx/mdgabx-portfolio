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
                <div className="flex flex-row shadow-lg rounded w-full p-10 my-4">
                    <img 
                        className="m-5" 
                        src={`../src/assets/projects/${project.image}`} 
                        alt={project.name} 
                        width="400px" 
                        height="340px" 
                    />
                    <h3 className="font-poppins text-lg my-4">{project.name}</h3>
                </div>    
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid mx-auto flex flex-row items-center justify-center">
                <div className="w-3/4 flex flex-col bg-white shadow-md my-10 p-5 border-2 rounded-lg">
                    <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">Projects</h2>
                    <div className="container flex flex-row items-center justify-center mx-auto w-full">
                        { projects.length === 0 ? (
                            <div className="flex items-center justify-center w-100">
                                <ClipLoader
                                color="#111"
                                loading={true}
                                size={40}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                                />
                            </div>
                        ) : (
                            <div className="w-100">
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
