import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <NavLink to="/" className="header-logo">
                    Francisco González
                </NavLink>

                {/* Desktop nav — inside header */}
                <nav className="header-links--desktop">
                    <NavLink to="/" end className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/posts" className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}>
                        Posts
                    </NavLink>
                    <NavLink to="/abilities" className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}>
                        Skills
                    </NavLink>
                </nav>

                <a href="mailto:fgonzalezd24042005@gmail.com" className="header-cta header-cta--desktop">
                    Contact
                </a>
            </header>

            {/* Hamburger button — OUTSIDE header so z-index works above overlay */}
            <button
                className="header-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            </button>

            {/* Mobile nav overlay — OUTSIDE header to avoid stacking context issues */}
            <nav className={`header-mobile-nav ${menuOpen ? 'header-mobile-nav--open' : ''}`}>
                <NavLink to="/" end className={({ isActive }) => `header-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/posts" className={({ isActive }) => `header-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                    Posts
                </NavLink>
                <NavLink to="/abilities" className={({ isActive }) => `header-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                    Skills
                </NavLink>
                <a href="mailto:fgonzalezd24042005@gmail.com" className="header-cta header-cta--mobile-link" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
            </nav>
        </>
    );
}
