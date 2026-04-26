import { MainSite } from "./sites/mainSite/MainSite.jsx";
import { Routes, Route } from "react-router-dom";
import { Abilities } from "./sites/abilitiesSite/Abilities.jsx";
import { Posts } from "./sites/postsSite/Posts.jsx";
import { Python } from "./sites/pythonSite/Python.jsx";
import { Java } from "./sites/javaSite/Java.jsx";
import { ReactSite } from "./sites/reactSite/React.jsx";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/abilities" element={<Abilities />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/python" element={<Python />} />
            <Route path="/java" element={<Java />} />
            <Route path="/react" element={<ReactSite />} />
        </Routes>
    )
}