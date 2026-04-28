import { useEffect, useRef } from 'react';
import './Body.css';

const skillCategories = [
    {
        id: 'backend',
        label: 'Backend',
        skills: [
            { name: 'Java',        level: 88, logo: '/java-logo.svg'    },
            { name: 'Spring Boot', level: 85, logo: '/spring-logo.svg'  },
            { name: 'Python',      level: 78, logo: '/python-logo.svg'  },
            { name: 'FastAPI',     level: 72, logo: '/fastapi-logo.svg' },
        ],
    },
    {
        id: 'frontend',
        label: 'Frontend',
        skills: [
            { name: 'React',  level: 75, logo: '/react-icon.png'   },
            { name: 'Vite',   level: 52, logo: '/Vitejs-logo.svg'  },
        ],
    },
    {
        id: 'data',
        label: 'Data & ML',
        skills: [
            { name: 'Pandas', level: 35, logo: '/pandas-logo.svg'  },
            { name: 'NumPy',  level: 40, logo: '/numpy-logo.svg'   },
        ],
    },
    {
        id: 'infra',
        label: 'Infra & Tools',
        skills: [
            { name: 'GitHub', level: 90, logo: '/github-logo.png'  },
            { name: 'MySQL',  level: 72, logo: '/mysql-logo.svg'   },
            { name: 'Docker', level: 60, logo: '/docker-logo.svg'  },
            { name: 'Kotlin', level: 60, logo: '/kotlin-logo.svg'  },
        ],
    },
];

export function Body() {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll('.skill-category');
        if (!cards?.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="abilities-page">
            <div className="abilities-header">
                <span className="abilities-tag">Skills</span>
                <h1 className="abilities-title">What I work with</h1>
                <p className="abilities-subtitle">
                    Technologies I use daily and tools I've built real projects with.
                </p>
            </div>

            <div className="abilities-grid" ref={gridRef}>
                {skillCategories.map(cat => (
                    <div key={cat.id} className="skill-category">
                        <div className="skill-category-header">
                            <span className="skill-category-label">{cat.label}</span>
                            <span className="skill-category-count">{cat.skills.length}</span>
                        </div>

                        <div className="skill-list">
                            {cat.skills.map(skill => (
                                <div key={skill.name} className="skill-row">
                                    <div className="skill-row-left">
                                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                    <div className="skill-row-right">
                                        <div className="skill-bar-bg">
                                            <div
                                                className="skill-bar-fill"
                                                style={{ '--skill-level': `${skill.level}%` }}
                                            />
                                        </div>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
