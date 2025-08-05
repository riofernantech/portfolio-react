import { ThemeContext } from "../../Context/ThemeContext"
import { useContext } from 'react'

export default function ThemeButton(){

    const { theme, handleThemeChange } = useContext(ThemeContext);
    
    function handleClick(event) {
        event.preventDefault(); 
        handleThemeChange();
    }

    let svg = null;

    if (theme === 'light') {
        svg = (
            <svg className="dark-icon feather feather-moon" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
        );
    } else {
        svg = (
            <svg className="light-icon eather feather-sun" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        );
    }

    return (
        <button id="theme-btn" onClick={handleClick} type="button" data-theme-toggle aria-label="Change to light theme">
            {svg}
        </button>
    )
}