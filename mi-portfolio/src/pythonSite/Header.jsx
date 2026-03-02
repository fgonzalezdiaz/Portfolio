import { useRef } from 'react';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, ItemActions } from "../components/ui/item";
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { Button } from "../components/ui/button"
import './Header.css';
import { BoxButtons } from "../components/ui/BoxButtons.jsx"


import { UpBarMenu } from "../components/ui/UpBarMenu"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { CardContact } from "../components/ui/CardContact"

export function Header() {
    return (
        <header className='Header'>
            <BoxButtons />
            <CommandLineIcon className='CommandLineIcon' />
            <WelcomeText />
            <UpBarMenu className='UpBarMenu' />
        </header>
    )
}

const WelcomeText = () => {
    return (
        <h1 className="WelcomeText">
            Francisco <span style={{ color: 'var(--accent-color)' }}>González</span> |
            <br />
            Full Stack Developer Student
        </h1>
    )
}

