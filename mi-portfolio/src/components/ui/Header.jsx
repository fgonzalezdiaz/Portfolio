import { useRef } from 'react';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, ItemActions } from "./item";
import { AtSymbolIcon } from "@heroicons/react/24/outline"
import { Button } from "./button"
import './Header.css';
import { BoxButtons } from "./BoxButtons.jsx"

import { UpBarMenu } from "./UpBarMenu"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { CardContact } from "./CardContact"

export function Header() {
    return (
        <header className='Header'>
            <BoxButtons />
            <CommandLineIcon className='CommandLineIcon' />
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

