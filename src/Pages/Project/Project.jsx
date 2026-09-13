import GithubIcon from "./GithubIcon"
import ProjectCard from "./ProjectCard"
import { projectItems } from "./projectData"
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';

export default function Project(){
    useDocumentTitle('Projects | RioFernando');
    
    return (
        <>  
            <div className="projects-title">
                <p>Projects</p>
                <GithubIcon/>
            </div>
            
            <hr />
            <br />

            <div className="projects-container">
                {projectItems.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    )
}