import './InfiniteMarquee.css';

export function InfiniteMarquee({ imageRoutes, header }) {

    const elementos = [];
    for (let i = 0; i < imageRoutes.length; i++) {
        elementos.push(<li key={i}><img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src={imageRoutes[i]} alt="Logo lenguaje" /></li>)
    }

    return (
        <div className="marquee">
            <div className="marquee_header">{header}</div>
            <div className="marquee__inner">
                {[...Array(10)].map((_, index) => (
                    <ul className="marquee__group" key={index}>
                        {elementos}
                    </ul>
                ))}
            </div>
        </div>
    )
}

