import SkillBadge from './SkillBadge';
import { technologySkills } from './skillData';

export default function Technologies() {
    return (
        <div className="skill-section">
            <div className="skill-title">
                <h4>Technologies</h4>
            </div>
            <div className="skill-items">
                {technologySkills.map(({ label, Icon }) => (
                    <SkillBadge key={label} label={label} Icon={Icon} />
                ))}
            </div>
        </div>
    );
}