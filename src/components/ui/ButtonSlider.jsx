import './ButtonSlider.css';

export function ButtonSlider({ link1, logo1, link2, logo2, link3, logo3 }) {
    return (
        <button className="btn-cssbuttons">
            <span>Contact</span>
            <ul>
                <li>
                    <a href={link1} target="_blank" rel="noreferrer">
                        <img src={logo1} height="18" width="18" className="icon" alt="icon 1" style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                </li>
                <li>
                    <a href={link2} target="_blank" rel="noreferrer">
                        <img src={logo2} height="18" width="18" className="icon" alt="icon 2" style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                </li>
                <li>
                    <a href={link3} target="_blank" rel="noreferrer">
                        <img src={logo3} height="18" width="18" className="icon" alt="icon 3" style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                </li>
            </ul>
        </button>
    )
}