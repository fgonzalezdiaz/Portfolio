import { MainSite } from "./mainSite/MainSite.jsx";
import { Routes, Route } from "react-router-dom";
import { Abilities } from "./abilitiesSite/Abilities.jsx";
import { Posts } from "./postsSite/Posts.jsx";
import { Python } from "./pythonSite/Python.jsx";
import { Java } from "./javaSite/Java.jsx";
import { React } from "./reactSite/React.jsx";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/abilities" element={<Abilities />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/python" element={<Python />} />
            <Route path="/java" element={<Java />} />
            <Route path="/react" element={<React />} />
        </Routes>
    )
}