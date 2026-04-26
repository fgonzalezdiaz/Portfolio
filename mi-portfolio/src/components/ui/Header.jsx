import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="header-logo">
                fg.dev
            </NavLink>

            <nav className="header-links">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/posts"
                    className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}
                >
                    Posts
                </NavLink>
                <NavLink
                    to="/abilities"
                    className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}
                >
                    Skills
                </NavLink>
            </nav>

            <a href="mailto:fgonzalezd24042005@gmail.com" className="header-cta">
                Contact
            </a>
        </header>
    );
}
