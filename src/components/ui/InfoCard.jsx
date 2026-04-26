import './InfoCard.css'
export function InfoCard({ text, image, title, reverse = false }) {
  return (
    <div className={`info-card-container ${reverse ? 'flex-reverse' : ''}`}>
      <div className="info-card-image-wrapper">
        <img src={image} className="info-card-img" alt={title || "Imagen informativa"} />
      </div>
      <div className="info-card-content">
        {title && <h3 className="info-card-title">{title}</h3>}
        <p className="info-card-text">{text}</p>
      </div>
    </div>
  );
}