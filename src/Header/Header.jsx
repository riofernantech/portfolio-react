import TopBar from "./Topbar/TopBar"
import Navbar from "./Navbar/Navbar"
import Vector from "./Vector/Vector"

export default function Header(){
    return (
        <header>
            <TopBar/>
            <Navbar/>
            <Vector/>
        </header>
    )
}