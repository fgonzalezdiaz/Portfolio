import './PostBox.css';
import { Link } from 'react-router-dom';


export function PostBox({ title, imageUrl, content, link }) {
  return (
    <article className="card">
      {/* Contenedor de la imagen */}
      <div className="card-header">
        <img
          src={imageUrl}
          alt={title}
          className="card-image"
        />
      </div>

      {/* Contenedor del texto */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">
          {content}
        </p>

        {/* Un botón opcional para 'Leer más' */}
        <Link to={link} ><button className="card-button">Read more</button></Link>
      </div>
    </article>
  );
}

export function PostBoxSimple({ title, imageUrl, link}) {
    return (
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <article className="card">      
          <div style={{padding: "5%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <img
              src={imageUrl}
              alt={title}
              className="card-image"
            />
          </div>
        </article>
      </Link>
    );
  }
