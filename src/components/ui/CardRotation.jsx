import './CardRotation.css'

export function CardRotation({text}) {
    return (
        <div className="card-rotation-wrapper">
            <p className="card-rotation-heading">
                About me
            </p>
            <p className="card-rotation-bio">
                {text}
            </p>
        </div>
    )
}