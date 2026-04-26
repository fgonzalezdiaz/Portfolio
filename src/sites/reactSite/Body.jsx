import './Body.css'
import { InfoBoxXL } from '../../components/ui/InfoBoxXL.jsx'
import { PostBoxSimple } from '../../components/ui/PostBox.jsx'
export function Body() {
    return (
        <div className="BodyReactSite">
            <img src="/avatar-brazos-abiertos.png" className="react-avatar-img" alt="Avatar" />
            <div className="react-info-wrapper">
                <InfoBoxXL text={<p style={{textAlign: "center"}}>To master <span style={{color: "var(--accent-color)"}}>Full Stack development</span>, understanding the concepts isn't enough. You have to get your hands dirty. That's why I chose to <span style={{color: "var(--accent-color)"}}>learn React and JSX syntax, powered by Vite, specifically to build this space</span>. Every component and line of code here is a prove of my commitment to continuous learning and my ability to adapt to new technologies quickly.</p>} />
            </div>
            <div className="BodyReactSiteDivImg">
                <PostBoxSimple imageUrl="/react-icon.png" link="https://react.dev/" />
                <PostBoxSimple imageUrl="/vite.svg" link="https://vite.dev/" />
            </div>
        </div>
    )
}