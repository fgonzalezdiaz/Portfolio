import './Body.css'
import { InfoBoxXLImg } from '../../components/ui/InfoBoxXL.jsx'
import { InfoBoxXLImgTitle } from '../../components/ui/InfoBoxXL.jsx'
import { InfoBoxMImg } from '../../components/ui/InfoBoxXL.jsx'
import { Link } from 'react-router-dom'
import { InfoBoxVerticalImg } from '../../components/ui/InfoBoxXL.jsx'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { InfoBoxVerticalImgTwoRepositories } from '../../components/ui/InfoBoxXL.jsx'
export function Body() {
    return (
        <div className="div-main-java">
            <div>
                <InfoBoxXLImgTitle title="Where I got started" text={<p>Welcome to my introductory <span style={{ color: 'var(--accent-color)' }}>Java repository!</span> This is where I wrote my <span style={{ color: 'var(--accent-color)' }}>first lines of code </span> in the language, focusing on exploring its functions and capabilities in detail. The project covers everything from <span style={{ color: 'var(--accent-color)' }}>basic</span> logic to more <span style={{ color: 'var(--accent-color)' }}>advanced </span>functional implementation</p>} image="./java-logo.svg" />
                <Link to="https://github.com/fgonzalezdiaz/introprg"><InfoBoxMImg text={<p>Click here to see my <span style={{ color: 'var(--accent-color)' }}>first lines of code</span> in Java</p>} image="./github-logo.svg" image2="./github-logo.svg" /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '10px' }}>
                <InfoBoxVerticalImgTwoRepositories text={<p>I have experience in building RESTful <span style={{ color: 'var(--accent-color)' }}>APIs using Java and Spring Boot</span>, focusing on creating solid backend architectures that deliver reliable data. I take pride in writing clean and well-structured code. You can explore my work, dive into my different applications, and check out my code in my repositories here: </p>} image="./public/spring-logo.svg" gitLink1="https://github.com/fgonzalezdiaz/spring_jdbc_users" gitLink2="https://github.com/fgonzalezdiaz/RA3" />
                <InfoBoxVerticalImg text={<p> I implemented <span style={{ color: 'var(--accent-color)' }}>encryption methods</span> using Java to ensure data security and integrity. I worked with Java’s built-in <span style={{ color: 'var(--accent-color)' }}>cryptography libraries</span>, applying algorithms such as AES for symmetric encryption and secure hashing techniques like SHA-256. The implementation included key generation, data encryption and decryption processes, and proper exception handling to maintain robustness. </p>} image="./public/candado-icon.png" gitLink="https://github.com/fgonzalezdiaz/M09-RA5" />
                <InfoBoxVerticalImg text={<p>I implemented advanced <span style={{ color: 'var(--accent-color)' }}>Java threading concepts</span> to build highly responsive, multi-threaded applications. The generated visualization illustrates my technical understanding of the thread lifecycle, showing execution paths from <span style={{ color: 'var(--accent-color)' }}>Thread.start()</span> to key states like Running, Waiting, and Blocked. I manage critical shared resources effectively by implementing synchronized blocks with locks, as depicted.</p>} image="./public/img-threads.png" gitLink="https://github.com/fgonzalezdiaz/RA2" />
            </div>

        </div>
    )
}