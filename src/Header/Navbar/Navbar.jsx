import HomeNav from "./HomeNav"
import ProjectNav from "./ProjectNav"
import BlogNav from "./BlogNav"
import ContactNav from "./ContactNav"

export default function Navbar(){
    return (
        <nav>
            <HomeNav />
            <ProjectNav />
            <BlogNav />
            <ContactNav />
        </nav>
    )
}