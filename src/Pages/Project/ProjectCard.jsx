export default function ProjectCard({ project }) {
    const { title, description, image, visit, source, techStack = [] } = project;

    return (
        <div className="project-card">
            <div className="project-thumbnail">
                <img src={image} alt={title} />
            </div>

            <div className="project-content">
                <h2>{title}</h2>
                <p>{description}</p>

                <div className="tech-stack">
                    {techStack.map(({ label, Icon }) => (
                        <span key={`${title}-${label}`} title={label}>
                            <Icon />
                        </span>
                    ))}
                </div>
            </div>

            <div className="project-actions">
                {visit && (
                    <a href={visit} className="project-link" target="_blank" rel="noreferrer">
                        Visit
                    </a>
                )}
                {source && (
                    <a href={source} className="project-source" target="_blank" rel="noreferrer">
                        Source
                    </a>
                )}
            </div>
        </div>
    );
}
