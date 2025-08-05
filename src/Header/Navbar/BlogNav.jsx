import { PageContext } from "../../Context/PageContext"
import { ThemeContext } from "../../Context/ThemeContext"
import { useContext } from 'react'

export default function BlogNav(){
    const handleNavigation = useContext(PageContext);
    const { theme } = useContext(ThemeContext);

    function handleClick(event) {
        event.preventDefault(); 
        handleNavigation('blog');
    }

    const svgColor = theme === 'light' ? "#000000" : "white";
    
    return (
        <a className="navBtn" dataTitle="Blog" href="#" onClick={handleClick}>
            <svg className="dark-icon" fill={svgColor} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 92 92" enableBackground="new 0 0 92 92" xml:space="preserve">
                <path id="XMLID_1960_" d="M76,2H16c-2.2,0-4,1.8-4,4v80c0,2.2,1.8,4,4,4h60c2.2,0,4-1.8,4-4V6C80,3.8,78.2,2,76,2z M72,82H20V10h52V82z M28.5,65c0-2.2,1.8-4,4-4h27c2.2,0,4,1.8,4,4s-1.8,4-4,4h-27C30.3,69,28.5,67.2,28.5,65z M29.1,46c0-2.2,1.8-4,4-4h26.3c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1C30.9,50,29.1,48.2,29.1,46z M29.1,27c0-2.2,1.8-4,4-4h26.3c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1C30.9,31,29.1,29.2,29.1,27z" />
            </svg>
            Blog
        </a>
    )
}