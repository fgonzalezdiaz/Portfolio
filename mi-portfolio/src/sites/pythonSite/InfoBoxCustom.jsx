import './InfoBoxCustom.css';

export function InfoBoxCustom() {
    return (
        <div className="project-wrapper">

            <div className="presentation-card">

                <div className="neon-icon aws-icon">☁️ aws</div>
                <div className="neon-icon db-icon">🗄️</div>
                <div className="neon-icon code-left">&lt;/&gt;</div>
                <div className="neon-icon code-right">&lt;/&gt;</div>
                <div className="neon-icon rfid-icon">📟 RFID</div>

                <div className="card-section logo-section">
                    <img src="/python-logo.svg" alt="Python Logo" className="python-logo" />
                </div>

                <div className="avatar-container">
                    <img
                        src="/avatar-brazos-abiertos.png"
                        alt="Mi Avatar Fullstack"
                        className="avatar-image"
                    />
                </div>

                <div className="card-section text-section">
                    <h3>IoT Access Control System</h3>
                    <p>
                        I built a complete <span className="highlight">IoT access control system</span> integrating
                        hardware, cloud, and backend services. It uses an <span className="highlight">Arduino
                            RFID reader</span> to scan cards, which then sends messages to <span className="highlight">AWS IoT Core</span>.
                        A <span className="highlight">Python API</span> processes these messages, queries a database to verify
                        access permissions, and returns the appropriate response to grant or deny entry.
                    </p>
                </div>
            </div>

            <div className="repo-link-bar" onClick={() => window.open('https://github.com/fgonzalezdiaz/ProjecteArduino', '_blank')}>
                <i className="github-icon"></i>
                <p>Click here to check out the <span className="highlight">Projecte Arduino</span> repository</p>
                <i className="github-icon"></i>
            </div>

        </div>
    );
}