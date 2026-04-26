import './UpBarMenu.css'
import { CardContact } from "./CardContact.jsx"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
export function UpBarMenu() {
    return (
        <div className='divBarMenu'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className='NavigationMenuItem'>
                        <NavigationMenuLink >
                            <Link to="/" className='HomeUpBarMenu'> Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='NavigationMenuItem'>
                        <NavigationMenuLink >
                            <Link to="/posts" className='HomeUpBarMenu'> Posts</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='NavigationMenuItem'>
                        <NavigationMenuLink >
                            <Link to="/abilities" className='HomeUpBarMenu'> Abilities </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

