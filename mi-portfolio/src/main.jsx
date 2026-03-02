import { createRoot } from 'react-dom/client'
import './mainSite/index.css'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
/*
2. Desglose del código
A. document.getElementById('root')
Esto es JavaScript estándar (no es React). Le dice al navegador:

"Busca en el HTML un elemento que tenga el ID llamado 'root' (ese <div> vacío del paso anterior)."

B. ReactDOM.createRoot(...)
Aquí ocurre la magia de React 18+.

"Toma ese div vacío y conviértelo en un contenedor gestionado por React."

A partir de este momento, ese div deja de ser un simple bloque HTML y se convierte en la "base de operaciones" de React.

C. root.render(<App />)
Esta es la orden de pintar.

"Dentro de ese contenedor raíz que acabamos de crear, quiero que muestres (renderices) el componente <App />."

<App />: Es tu componente principal. Dentro de <App /> estarán el resto de tus componentes (Header, Footer, Botones, etc.). Es el "padre" de todo tu sitio.
*/