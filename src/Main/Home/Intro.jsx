import { ThemeContext } from "../../Context/ThemeContext"
import { useContext } from "react"

export default function Intro(){
    const { theme } = useContext(ThemeContext);

    const svgColor = theme === 'light' ? "#000000" : "white";

    return (
        <>
            <h3>Introduction</h3>
            <hr />
            <p>I'm Rio Surya Fernando, a graduate of Vocational High School in Computer and Network Engineering (TKJ). I have
            expertise in computer networking, including Mikrotik, Linux, and web servers, and I specialize in backend development
            for web projects. With experience in creating websites for organizations, freelancing, and building programs for
            personal enjoyment or societal needs, I am committed to continuously developing innovative and impactful digital
            solutions</p>
            <br />

            <div className="resume">
                <a href="">
                    <div className="cv">
                        <svg className="dark-icon" fill={svgColor} width="25px" height="25px" viewBox="0 0 32 32" dataName="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                            <rect height="1" width="12" x="10" y="29" />
                            <rect height="1" width="12" x="10" y="2" />
                            <rect height="1" width="9" x="13" y="20" />
                            <rect height="1" width="2" x="10" y="20" />
                            <rect height="1" width="9" x="13" y="23" />
                            <rect height="1" width="2" x="10" y="23" />
                            <rect height="1" transform="translate(9.5 41.5) rotate(-90)" width="20" x="15.5" y="15.5" />
                            <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z" />
                            <rect height="1" transform="translate(-9.5 22.5) rotate(-90)" width="20" x="-3.5" y="15.5" />
                            <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z" />
                            <path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z" />
                            <path d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z" />
                            <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,3.8,3.8,0,0,1,.17-1.07,4,4,0,0,1,7.66,0A3.8,3.8,0,0,1,20,16.93a7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2Z" />
                            <path d="M16,8a2,2,0,1,0,2,2A2,2,0,0,0,16,8Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z" />
                            <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,8,8,0,0,0,8,0,7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2ZM16,17a7,7,0,0,1-3.83-1.14,4,4,0,0,1,7.66,0A7,7,0,0,1,16,17Z" />
                            <path d="M20.67,15.2a6,6,0,0,1-.84.66,4,4,0,0,0-7.66,0,6,6,0,0,1-.84-.66,5,5,0,0,1,9.34,0Z" />
                        </svg>
                        Resume
                    </div>
                </a>
                <a href="">
                    <div className="email">
                        <svg className="dark-icon" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke={svgColor} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke={svgColor} strokeWidth="1" strokeLinecap="round" />
                        </svg>
                        Send Email
                    </div>
                </a>
            </div>
        </>
    )
}