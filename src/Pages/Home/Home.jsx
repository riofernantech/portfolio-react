import Intro from "./Intro"
import Skill from "./Skill/Skill";
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';

export default function Home(){
    useDocumentTitle('Intro | RioFernando');

    return (
        <>
            <Intro />
            <Skill />
        </>
    )
}