import { PostBox } from "../components/ui/PostBox.jsx"
import './Body.css';
export function Body() {
    return (
        <div className="div-main-posts">
            <PostBox title={<p>About my <span style={{ color: 'var(--accent-color)' }}>Python</span> knowledge</p>} content="Click here to read more" imageUrl="/python-logo.svg" link="/python" />
            <PostBox title={<p>About my <span style={{ color: 'var(--accent-color)' }}>React</span> knowledge</p>} content="Click here to read more" imageUrl="/react-icon.png" link="/react" />
            <PostBox title={<p>About my <span style={{ color: 'var(--accent-color)' }}>Java</span> knowledge</p>} content="Click here to read more" imageUrl="/java-logo.svg" link="/java" />
        </div>
    )
}