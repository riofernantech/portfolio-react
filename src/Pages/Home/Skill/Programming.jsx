import SkillBadge from './SkillBadge';
import { programmingSkills } from './skillData';

export default function Programming() {
    return (
        <div className="skill-section">
            <div className="skill-title">
                <h4>Programming Languages</h4>
            </div>
            <div className="skill-items">
                {programmingSkills.map(({ label, Icon }) => (
                    <SkillBadge key={label} label={label} Icon={Icon} />
                ))}
            </div>
        </div>
    );
}