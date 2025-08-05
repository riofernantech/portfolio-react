import Title from './Title';
import Programming from './Programming';
import Technologies from './Technologies';
import Certificates from './Certificates';

export default function Skill(){
    return (
        <>
            <Title />
            <div className="skill-container">
                <Programming />
                <Technologies />
                <Certificates />
            </div>
        </>
        
    )
}