import { useCallback } from 'react';
import './ContainerProjects.css';

const projects = [
    {
        id: 1,
        title: 'IoT Access Control System',
        desc: 'Arduino RFID + AWS IoT Core + Python API. Full hardware-to-cloud access control pipeline.',
        tags: ['Python', 'AWS', 'Arduino', 'FastAPI'],
        icon: '/python-logo.svg',
        accent: '#3776ab',
        github: 'https://github.com/fgonzalezdiaz/iot-access',
        featured: true,
    },
    {
        id: 2,
        title: 'Spring Boot REST API',
        desc: 'RESTful API with AES encryption, SHA-256 hashing, Spring Security and JPA repositories.',
        tags: ['Java', 'Spring Boot', 'MySQL'],
        icon: '/spring-logo.svg',
        accent: '#6db33f',
        github: 'https://github.com/fgonzalezdiaz/springboot-api',
        featured: false,
    },
    {
        id: 3,
        title: 'This portfolio',
        desc: 'Built from scratch with React + Vite. Every component is proof of hands-on learning.',
        tags: ['React', 'Vite', 'CSS'],
        icon: '/react-icon.png',
        accent: '#61dafb',
        github: 'https://github.com/fgonzalezdiaz/Portfolio',
        featured: false,
    },
];

function ProjectCard({ project }) {
    const handleMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        const rotateX = -(y * 16).toFixed(2);
        const rotateY = (x * 16).toFixed(2);
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    }, []);

    const handleMouseLeave = useCallback((e) => {
        e.currentTarget.style.transform = 'none';
    }, []);

    return (
        <div
            className={`proj-card${project.featured ? ' proj-card--featured' : ''}`}
            style={{ '--card-accent': project.accent }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="proj-card-top">
                <img src={project.icon} alt={project.title} className="proj-icon" />
                {project.featured && (
                    <span className="proj-featured-badge">Featured</span>
                )}
            </div>
            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-desc">{project.desc}</p>
            <div className="proj-footer">
                <div className="proj-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                </div>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-github"
                >
                    <img src="/github-logo.svg" alt="GitHub" width="16" height="16" />
                </a>
            </div>
        </div>
    );
}

export function ContainerProjects() {
    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <span className="section-label">Featured projects</span>
                <div className="section-line" />
            </div>

            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
