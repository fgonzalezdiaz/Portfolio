import { useForm, ValidationError } from '@formspree/react';
import './Footer.css';

const LINKEDIN = 'https://www.linkedin.com/in/francisco-gonzález-díaz-095705355';
const GITHUB   = 'https://github.com/fgonzalezdiaz';

function ContactForm() {
    const [state, handleSubmit] = useForm('xyknqgwe');

    if (state.succeeded) {
        return (
            <p className="contact-success">
                Message sent — I'll get back to you soon.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-fields">
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="contact-input"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="contact-error" />
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="contact-input contact-textarea"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="contact-error" />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="contact-btn"
            >
                {state.submitting ? 'Sending...' : 'Send message'}
            </button>
        </form>
    );
}

export function Footer() {
    return (
        <>
            <section className="contact-section">
                <div className="contact-heading">
                    <h2 className="contact-title">
                        Let's work <span>together</span>
                    </h2>
                    <p className="contact-subtitle">
                        Open to freelance projects and full-time positions.
                    </p>
                </div>

                <ContactForm />

                <div className="contact-links">
                    <a href={GITHUB} target="_blank" rel="noreferrer" className="contact-link">
                        <img src="/github-logo.svg" alt="GitHub" />
                        GitHub
                    </a>
                    <a href={LINKEDIN} target="_blank" rel="noreferrer" className="contact-link">
                        <img src="/linkedin-logo.svg" alt="LinkedIn" />
                        LinkedIn
                    </a>
                </div>
            </section>

            <footer className="footer-bar">
                <span className="footer-name">
                    <span>Francisco González</span> · {new Date().getFullYear()}
                </span>
                <span className="footer-built">
                    Built with
                    <img src="/react-icon.png" alt="React" />
                    <img src="/Vitejs-logo.svg" alt="Vite" />
                    React + Vite
                </span>
            </footer>
        </>
    );
}
