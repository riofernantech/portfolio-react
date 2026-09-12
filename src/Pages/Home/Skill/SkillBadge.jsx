export default function SkillBadge({ label, Icon }) {
    return (
        <span className="skill-item">
            <Icon />
            {label}
        </span>
    );
}
