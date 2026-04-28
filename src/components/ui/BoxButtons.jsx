import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, ItemActions } from "./item";
import { Button } from "./button";
import { InformationCircleIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { CardContact } from "./CardContact";

export function BoxButtons() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="BoxButtons">
            <Accordion type="single" collapsible>
                <AccordionItem value="Contact">
                    <AccordionTrigger>
                        <InformationCircleIcon className='InformationIcon' />
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex w-full max-w-md flex-col gap-6">
                            <Item className='Item'>
                                <ItemMedia>
                                    <AtSymbolIcon style={{ width: '40px', height: '40px', color: 'var(--accent-color)' }} />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>CONTACT</ItemTitle>
                                    <ItemDescription style={{ color: 'var(--text-primary)' }}>If you are interested in <span style={{ color: 'var(--accent-color)' }}>contacting</span> me</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button className="ButtonAccordions" onClick={() => setIsContactOpen(true)}>ClickMe</Button>
                                </ItemActions>
                            </Item>
                        </div>
                    </AccordionContent>
                    <AccordionContent>
                        <div className="flex w-full max-w-md flex-col gap-6">
                            <Item className='Item'>
                                <ItemMedia className='ItemMedia'>
                                    <img src="/linkedin-logo.png" style={{ width: '40px', height: '40px', color: 'var(--accent-color)' }} alt="LinkedinLogo" />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>LINKEDIN</ItemTitle>
                                    <ItemDescription style={{ color: 'var(--text-primary)' }}>If you are interested in my <span style={{ color: 'var(--accent-color)' }}>LinkedIn</span></ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button className="ButtonAccordions"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/francisco-gonzález-díaz-095705355">ClickMe </a></Button>                                </ItemActions>
                            </Item>
                        </div>
                    </AccordionContent>
                    <AccordionContent>
                        <div className="flex w-full max-w-md flex-col gap-6">
                            <Item className='Item'>
                                <ItemMedia>
                                    <img src="/github-logo.png" style={{ width: '40px', height: '40px', color: 'var(--accent-color)' }} alt="" />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>GITHUB</ItemTitle>
                                    <ItemDescription style={{ color: 'var(--text-primary)' }}>If you are interested in my <span style={{ color: 'var(--accent-color)' }}>GitHub</span></ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button className="ButtonAccordions"><a target="_blank" rel="noopener noreferrer" href="https://github.com/fgonzalezdiaz">ClickMe </a></Button>                                </ItemActions>
                            </Item>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Dialog
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                title="Contacto"
            >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardContact />
                </div>
            </Dialog>
        </div>
    )
}