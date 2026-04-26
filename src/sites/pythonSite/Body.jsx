import './Body.css'
import { InfoBoxXLImgTitle } from '../../components/ui/InfoBoxXL.jsx'
import { InfoBoxMImg } from '../../components/ui/InfoBoxXL.jsx'
import { InfoBoxVerticalImg } from '../../components/ui/InfoBoxXL.jsx'
import { Link } from 'react-router-dom'
import { InfoBoxCustom } from './InfoBoxCustom.jsx'
export function Body() {
    return (
        <div className="div-main-python">
            <div>
                <InfoBoxCustom />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '10px', marginTop: '20px' }}>
                
            </div>
        </div>
    )
}
