import Avatar from "./Avatar"
import GithubIcon from "./GithubIcon"
import ThemeBUtton from "./ThemeButton"

export default function TopBar(){
    return (
            <div className="title-nav">
                <div> <span>Rio</span>Fernando </div>
                <div className="icon-nav"> 
                    <ThemeBUtton/>
                    <GithubIcon/>
                    <Avatar/>
                </div>
            </div>
    )
}