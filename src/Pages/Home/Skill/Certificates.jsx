import { useState } from "react"
import { ThemeContext } from "../../../Context/ThemeContext"
import { useContext } from "react"

export default function Certificates() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <div className="skill-container">
      <div className="skill-section">
        <div className="skill-title">
          <h4>Certificates</h4>
        </div>
        <div className="sertif-items">
          <div className="sertif-title">Javascript Fundamental</div>
          <div className="sertif-platform">Dicoding Indonesia</div>
          <div className="sertif-date">July 31, 2023</div>
          <a className="sertif-link" href="https://www.dicoding.com/certificates/07Z6VE8MMXQR">View Certificate</a>
        </div>

        {show && <More/>}

        {!show && <Button title="View more" onClick={handleClick} show={show}/>}
        {show && <Button title="View less" onClick={handleClick} show={show}/>}
      </div>
    </div>
  );
}

function Button({ title, onClick, show }) {
  const { theme } = useContext(ThemeContext);
  const svgColor = theme === 'light' ? "#000000" : "white";
  
  let svg = <svg width="80px" height="80px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill={svgColor} /></svg>
  if (show) svg = <svg width="80px" height="80px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill={svgColor} /></svg>
  
  return (
    <span id="certifBtn" onClick={onClick}>
        {title} 
        {svg}
    </span>
  );
}

function More(){
    return (
        <>  
            <div className="sertif-items">
                <div className="sertif-title">Computer Network Fundamental</div>
                <div className="sertif-platform">Dicoding Indonesia</div>
                <div className="sertif-date">Januray 29, 2025</div>
                <a className="sertif-link" href="https://www.dicoding.com/certificates/98XWE4L14XM3">View Certificate</a>
            </div>
            <div className="sertif-items">
                <div className="sertif-title">AWS Cloud Fundamental</div>
                <div className="sertif-platform">Dicoding Indonesia</div>
                <div className="sertif-date">February 28, 2025</div>
                <a className="sertif-link" href="https://www.dicoding.com/certificates/JLX19VW8GP72">View Certificate</a>
            </div>
            <div className="sertif-items">
                <div className="sertif-title">Javascript Backend</div>
                <div className="sertif-platform">Dicoding Indonesia</div>
                <div className="sertif-date">February 27, 2025</div>
                <a className="sertif-link" href="https://www.dicoding.com/certificates/6RPNRR9O8X2M">View Certificate</a>
            </div>
        </>
    )
}