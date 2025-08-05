import Home from "./Home/Home.jsx"
import Contact from "./Contact/Contact.jsx"
import Project from "./Project/Project.jsx"
import Blog from "./Blog/Blog.jsx"

export default function Main({page}){
    let content;

    switch (page) {
        case 'home':
            content = <Home />;
            break;
        case 'project':
            content = <Project />;
            break;
        case 'blog':
            content = <Blog />;
            break;
        case 'contact':
            content = <Contact />;
            break;
        default:
            content = null;
    }

    return (
        <main id="main">
            {content} 
        </main>
    )
}