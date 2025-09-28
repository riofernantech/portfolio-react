import { useState } from "react"
import Avatar from "./Avatar"
import GithubIcon from "./GithubIcon"
import ThemeButton from "./ThemeButton"
import AvatarPopUp from "./AvatarPopUp"
import LinkedinIcon from "./LinkedinIcon"

export default function TopBar(){
    const [show, setShow] = useState(false);
    
    function handleShow() {
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    return (
            <div className="title-nav">
                <div> <span>Rio</span>Fernando </div>
                <div className="icon-nav"> 
                    <ThemeButton/>
                    {/* <GithubIcon/> */}
                    <LinkedinIcon/>
                    <Avatar onSmash={handleShow}/>
                </div>
                {show && <AvatarPopUp onSmash={handleClose}/>}
            </div>
    )
}