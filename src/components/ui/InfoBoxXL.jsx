import './InfoBoxXL.css'
import { Link } from 'react-router-dom'

export function InfoBoxXL({ text }) {
    return (
        <div className='InfoBoxXL'>
            <p className='text-InfoBoxXL'>{text}</p>
        </div>
    )
}

export function InfoBoxXLImg({ text, image }) {
    return (
        <div className='InfoBoxXLImg'>
            <img src={image} className='img-InfoBoxXL' alt="Imagen" style={{ width: '30%' }} />
            <p className='text-InfoBoxXL'>{text}</p>
        </div>
    )
}

export function InfoBoxXLImgTitle({ title, text, image }) {
    return (
        <div className='InfoBoxXLImgTitle'>
            <img src={image} className='img-InfoBoxXL' alt="Imagen" style={{ width: '30%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '70%' }}>
                <h3 className='title-InfoBoxXL'>{title}</h3>
                <p className='text-InfoBoxXL'>{text}</p>
            </div>
        </div>
    )
}

export function InfoBoxVerticalImgTitle({ title, text }) {
    return (
        <div className="InfoBoxVerticalImgTitle">
            <h3>{title}</h3>
            <p className='text-InfoBoxVerticalImgTitle'>{text}</p>
        </div>
    )
}


export function InfoBoxMImg({ text, image, image2 }) {
    return (
        <div className='InfoBoxMImg'>
            <img src={image} className='img-InfoBoxMImg' alt="Imagen" style={{ width: '30%' }} />
            <p className='text-InfoBoxMImg'>{text}</p>
            <img src={image2} className='img-InfoBoxMImg' alt="Imagen" style={{ width: '30%' }} />
        </div>
    )
}

export function InfoBoxMVerticalImg({ text, image, image2 }) {
    return (
        <div className='InfoBoxMImg' style={{ backgroundColor: 'var(--accent-color)' }}>
            <img src={image} className='img-InfoBoxMImg' alt="Imagen" style={{ width: '30%' }} />
            <p className='text-InfoBoxMImg'>{text}</p>
            <img src={image2} className='img-InfoBoxMImg' alt="Imagen" style={{ width: '30%' }} />
        </div>
    )
}

export function InfoBoxVerticalImg({ text, image, gitLink }) {
    return (
        <div className='InfoBoxVerticalImg'>
            <img src={image} className='img-InfoBoxXL' alt="Imagen" style={{ marginTop: '20px', marginBottom: '20px' }} />
            <p className='text-InfoBoxXL'>{text}</p>
            <Link to={gitLink}><InfoBoxMVerticalImg text={<p>Click here to find the repository</p>} image="./public/github-logo.svg" image2="./public/github-logo.svg" /></Link>
        </div>
    )
}

export function InfoBoxVerticalImgTwoRepositories({ text, image, gitLink1, gitLink2 }) {
    return (
        <div className='InfoBoxVerticalImg'>
            <img src={image} className='img-InfoBoxXL' alt="Imagen" style={{ marginTop: '20px', marginBottom: '20px' }} />
            <p className='text-InfoBoxXL'>{text}</p>
            <Link to={gitLink1}><InfoBoxMVerticalImg text={<p>Repository SpringBoot JDCB</p>} image="./public/github-logo.svg" image2="./public/github-logo.svg" /></Link>
            <Link to={gitLink2}><InfoBoxMVerticalImg text={<p>Repository SpringBoot JPA</p>} image="./public/github-logo.svg" image2="./public/github-logo.svg" /></Link>
        </div>
    )
}
