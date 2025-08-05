import { PageContext } from "../../Context/PageContext"
import { ThemeContext } from "../../Context/ThemeContext"
import { useContext } from 'react'

export default function ProjectNav(){
    const handleNavigation = useContext(PageContext);
    const { theme } = useContext(ThemeContext);

    function handleClick(event) {
        event.preventDefault(); 
        handleNavigation('project');
    }

    const svgColor = theme === 'light' ? "#000000" : "white";
    
    return (
        <a className="navBtn" dataTitle="Project" href="#" onClick={handleClick}>
            <svg className="dark-icon" fill={svgColor} width="17px" height="17px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g><path d="M2,9H9V2H2Zm0,9H9V11H2ZM18,2H11V9h7Zm-8,9,5,8,5-8Z" /></g>
            </svg>
            Project
        </a>
    )
}