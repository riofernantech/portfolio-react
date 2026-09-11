import SkillBadge from './SkillBadge';
import { frameworkSkills } from './skillData';

export default function Frameworks() {
    return (
        <div className="skill-container">
            <div className="skill-section">
                <div className="skill-title">
                    <h4>Framework</h4>
                </div>
                <div className="skill-items">
                    {frameworkSkills.map(({ label, Icon }) => (
                        <SkillBadge key={label} label={label} Icon={Icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}