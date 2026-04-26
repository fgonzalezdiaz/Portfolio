import { useEffect, useRef } from 'react';
import './Body.css';
import { Footer } from '../../components/ui/Footer';
import { ContainerProjects } from './ContainerProjects';

const roles = ['Full Stack Developer', 'Backend Developer', 'AI Enthusiast'];

const techStack = [
    { name: 'React',       logo: '/react-icon.png'   },
    { name: 'Java',        logo: '/java-logo.svg'    },
    { name: 'Spring Boot', logo: '/spring-logo.svg'  },
    { name: 'Python',      logo: '/python-logo.svg'  },
    { name: 'Docker',      logo: '/docker-logo.svg'  },
    { name: 'MySQL',       logo: '/mysql-logo.svg'   },
    { name: 'FastAPI',     logo: '/fastapi-logo.svg' },
    { name: 'Kotlin',      logo: '/kotlin-logo.svg'  },
    { name: 'NumPy',       logo: '/numpy-logo.svg'   },
    { name: 'Pandas',      logo: '/pandas-logo.svg'  },
];

export function Body() {
    const typeRef = useRef(null);

    useEffect(() => {
        const el = typeRef.current;
        if (!el) return;

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timer;

        function tick() {
            const current = roles[roleIndex];

            if (isDeleting) {
                charIndex--;
                el.textContent = current.slice(0, charIndex);
            } else {
                charIndex++;
                el.textContent = current.slice(0, charIndex);
            }

            let delay = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === current.length) {
                delay = 1800;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delay = 300;
            }

            timer = setTimeout(tick, delay);
        }

        timer = setTimeout(tick, 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section className="hero">
                <div className="hero-bg" />

                <div className="hero-left">
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Available for work
                    </div>

                    <h1 className="hero-title">
                        <span ref={typeRef} className="hero-title-accent" />
                        <span className="hero-title-cursor">|</span>
                    </h1>

                    <p className="hero-stack">Java · Spring · React · Python</p>

                    <p className="hero-desc">
                        21 y/o developer building scalable systems and clean interfaces.
                        Passionate about data analysis and machine learning.
                    </p>

                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View projects</a>
                        <a href="/cv.pdf" className="btn-ghost" target="_blank" rel="noreferrer">Download CV</a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="avatar-wrap">
                        <div className="avatar-ring ring-1" />
                        <div className="avatar-ring ring-2" />
                        <div className="avatar-ring ring-3" />
                        <img src="/avatar-yo.png" alt="avatar" className="avatar-img" />
                    </div>

                    <div className="hero-stats">
                        <div className="stat-chip">
                            <span className="stat-num">8+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-chip">
                            <span className="stat-num">Current</span>
                            <span className="stat-label">Learning</span>
                        </div>
                        <div className="stat-chip">
                            <span className="stat-num">5</span>
                            <span className="stat-label">Languages</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="stack-section">
                <span className="stack-label">Stack</span>
                <div className="stack-marquee">
                    <div className="stack-track">
                        {[...techStack, ...techStack].map((item, i) => (
                            <div className="tech-pill" key={i}>
                                <img src={item.logo} alt={item.name} className="tech-logo" />
                                <span className="tech-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ContainerProjects />

            <Footer />
        </>
    );
}
