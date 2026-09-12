import Title from './Title';
import Programming from './Programming';
import Frameworks from './Frameworks';
import Technologies from './Technologies';
import Certificates from './Certificates';

export default function Skill(){
    return (
        <>
            <Title />
            <div className="skill-container">
                <Programming />
                <Frameworks />
                <Technologies />
                <Certificates />
            </div>
        </>
        
    )
}