import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/ui/Header.jsx';
import './Posts.css';

const GestIALogo = () => (
    <svg width="110" height="110" viewBox="0 0 110 110"
         fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* Base / pedestal */}
        <rect x="49" y="82" width="12" height="18" rx="2" fill="#a78bfa" opacity="0.6"/>
        <rect x="36" y="96" width="38" height="5" rx="2.5" fill="#a78bfa" opacity="0.5"/>

        {/* Tronco vertical */}
        <line x1="55" y1="20" x2="55" y2="82" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Brazo horizontal */}
        <line x1="20" y1="38" x2="90" y2="38" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Nodo central */}
        <circle cx="55" cy="38" r="5" fill="#a78bfa"/>
        <circle cx="55" cy="38" r="8" stroke="#a78bfa" strokeWidth="1" opacity="0.3"/>

        {/* Cadena izquierda */}
        <line x1="20" y1="38" x2="24" y2="60" stroke="#7c6fd4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="38" x2="16" y2="60" stroke="#7c6fd4" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Platillo izquierdo */}
        <path d="M10 60 Q17 68 24 60" stroke="#a78bfa" strokeWidth="2" fill="rgba(167,139,250,0.1)" strokeLinecap="round"/>

        {/* Cadena derecha */}
        <line x1="90" y1="38" x2="94" y2="60" stroke="#7c6fd4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="90" y1="38" x2="86" y2="60" stroke="#7c6fd4" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Platillo derecho */}
        <path d="M86 60 Q90 68 94 60" stroke="#a78bfa" strokeWidth="2" fill="rgba(167,139,250,0.1)" strokeLinecap="round"/>

        {/* Nodos de circuito izquierda */}
        <circle cx="20" cy="38" r="3.5" fill="#1a5f8a"/>
        <circle cx="20" cy="38" r="6" stroke="#1a5f8a" strokeWidth="1" opacity="0.4"/>

        {/* Nodos de circuito derecha */}
        <circle cx="90" cy="38" r="3.5" fill="#1a5f8a"/>
        <circle cx="90" cy="38" r="6" stroke="#1a5f8a" strokeWidth="1" opacity="0.4"/>

        {/* Circuitos decorativos izquierda */}
        <line x1="20" y1="32" x2="20" y2="24" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.7"/>
        <line x1="20" y1="24" x2="14" y2="24" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.7"/>
        <circle cx="14" cy="24" r="2" fill="#1a5f8a" opacity="0.7"/>

        <line x1="20" y1="44" x2="20" y2="52" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.5"/>
        <line x1="20" y1="52" x2="13" y2="52" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="13" cy="52" r="1.5" fill="#1a5f8a" opacity="0.5"/>

        {/* Circuitos decorativos derecha */}
        <line x1="90" y1="32" x2="90" y2="24" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.7"/>
        <line x1="90" y1="24" x2="96" y2="24" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.7"/>
        <circle cx="96" cy="24" r="2" fill="#1a5f8a" opacity="0.7"/>

        <line x1="90" y1="44" x2="90" y2="52" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.5"/>
        <line x1="90" y1="52" x2="97" y2="52" stroke="#1a5f8a" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="97" cy="52" r="1.5" fill="#1a5f8a" opacity="0.5"/>

        {/* Circuito en el tronco */}
        <line x1="55" y1="55" x2="62" y2="55" stroke="#a78bfa" strokeWidth="1" opacity="0.4"/>
        <circle cx="64" cy="55" r="1.5" fill="#a78bfa" opacity="0.4"/>
        <line x1="55" y1="65" x2="48" y2="65" stroke="#a78bfa" strokeWidth="1" opacity="0.4"/>
        <circle cx="46" cy="65" r="1.5" fill="#a78bfa" opacity="0.4"/>
    </svg>
);

const postCards = [
    {
        id: 'gestia',
        title: 'GestIA',
        subtitle: 'Legal AI Solutions',
        desc: 'Building an AI-powered legal management tool. Automating documents, contracts and legal workflows with LLMs.',
        logo: '/LogoGestIA.png',
        accent: '#1a5f8a',
        tags: ['AI', 'LLMs', 'Legal Tech'],
        featured: true,
        comingSoon: true,
    },
    {
        id: 'python',
        title: 'Python',
        subtitle: 'Data, scripting & backend',
        desc: 'FastAPI, NumPy, Pandas, scripting and AWS Lambda integrations.',
        logo: '/python-logo.svg',
        accent: '#3776ab',
        tags: ['FastAPI', 'NumPy', 'Pandas'],
        featured: false,
    },
    {
        id: 'react',
        title: 'React',
        subtitle: 'Frontend & UI',
        desc: 'Component architecture, hooks, Vite tooling and this portfolio.',
        logo: '/react-icon.png',
        accent: '#61dafb',
        tags: ['Hooks', 'Vite', 'JSX'],
        featured: false,
    },
    {
        id: 'java',
        title: 'Java',
        subtitle: 'Backend & systems',
        desc: 'Spring Boot, JPA, encryption, multithreading and REST APIs.',
        logo: '/java-logo.svg',
        accent: '#f89820',
        tags: ['Spring', 'JPA', 'Security'],
        featured: false,
    },
];

export function Posts() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="posts-page">
                <div className="posts-header">
                    <span className="posts-tag">Blog</span>
                    <h1 className="posts-title">Deep dives</h1>
                    <p className="posts-subtitle">
                        Detailed write-ups on the technologies I use and the projects I build.
                    </p>
                </div>

                <div className="posts-grid">
                    {postCards.map(post => (
                        <div
                            key={post.id}
                            className={`post-card ${post.featured ? 'post-card--featured' : ''} ${post.comingSoon ? 'post-card--coming' : ''}`}
                            style={{ '--card-accent': post.accent }}
                            onClick={() => !post.comingSoon && navigate(`/${post.id}`)}
                        >
                            {post.featured ? (
                                <>
                                    <div className="post-card-logo-col">
                                        <GestIALogo />
                                    </div>
                                    <div className="post-card-content">
                                        <div className="post-card-top">
                                            <span className="post-coming-badge">Coming soon</span>
                                        </div>
                                        <div className="post-card-body">
                                            <h2 className="post-title">{post.title}</h2>
                                            <p className="post-subtitle-text">{post.subtitle}</p>
                                            <p className="post-desc">{post.desc}</p>
                                        </div>
                                        <div className="post-tags">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="post-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="post-card-top">
                                        <img src={post.logo} alt={post.title} className="post-logo" />
                                        <svg className="post-arrow" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M3 8h10M9 4l4 4-4 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="post-card-body">
                                        <h2 className="post-title">{post.title}</h2>
                                        <p className="post-subtitle-text">{post.subtitle}</p>
                                        <p className="post-desc">{post.desc}</p>
                                    </div>
                                    <div className="post-tags">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="post-tag">{tag}</span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
