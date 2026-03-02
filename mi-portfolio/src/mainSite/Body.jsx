import './Body.css';
import { InfoBoxVerticalImgTitle } from "../components/ui/InfoBoxXL";
import { InfoBoxMImg } from "../components/ui/InfoBoxXL";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from "../components/ui/item";
export function Body() {
    return (
        <>
            <div className="div-main-1">
                <InfoBoxVerticalImgTitle text={TextBox1()} title="About me" />
                <img src="/avatar-yo.png" alt="Imagen" className= "avatar-main"/>
            </div>
            <div className="div-main">
                <InfoBoxMImg text={TextBox2()} image="/react-icon.png" image2="/Vitejs-logo.svg" />
            </div>
        </>
    )
}

export function TextBox1() {
    return (
        <>I'm a 21-year-old developer and Cross-Platform App Development student with a <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}> Full Stack </span> mindset and a huge interest in Data Analysis and Machine Learning.
            I’ve built a solid technical foundation in <span style={{ color: 'var(--accent-color)', fontWeight: 'superbold' }}>Java, SpringBoot, Python, FastAPI, MySQL, and React</span>, plus I gained some cool international experience doing hardware maintenance in Italy.
            I consider myself a self-taught, problem-solving dev ready to bring innovative solutions to the tech world.</>
    )
}

export function TextBox2() {
    return (
        <p>FRANCISCO GONZÁLEZ | <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>FULL STACK DEVELOPER</span> STUDENT</p>
    )
}
