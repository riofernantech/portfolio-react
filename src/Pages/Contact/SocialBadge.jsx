export default function SocialBadge({ label, href, Icon }) {
    return (
        <a data-aos="fade-up" className="link" href={href} target="_blank" rel="noreferrer">
            <div className="link-box">
                <Icon className="thumb" />
                <div className="link-title">{label}</div>
                <div className="empty"></div>
            </div>
        </a>
    );
}
