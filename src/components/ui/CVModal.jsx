import { useEffect } from "react";
import "./CVModal.css";

const CVModal = ({ onClose }) => {

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="cv-overlay" onClick={onClose}>
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>

        <div className="cv-modal-header">
          <span className="cv-modal-title">Resume — Francisco González</span>
          <div className="cv-modal-actions">
            <a
              href="/resume.pdf"
              download="Resume_Francisco_Gonzalez.pdf"
              className="cv-download-btn"
            >
              ↓ Download
            </a>
            <button className="cv-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        <div className="cv-modal-body">
          <iframe
            src="/resume.pdf"
            title="CV Francisco González"
            className="cv-iframe"
          />
        </div>

      </div>
    </div>
  );
};

export default CVModal;
