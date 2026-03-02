import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Dialog.css';

export function Dialog({ isOpen, onClose, title, children }) {
    // 1. El Gancho al elemento HTML real
    const dialogRef = useRef(null);

    // 2. El Sincronizador de estado
    useEffect(() => {
        const dialogElement = dialogRef.current;
        if (!dialogElement) return;

        if (isOpen) {
            dialogElement.showModal(); // Lo abre y bloquea el fondo
        } else {
            dialogElement.close();     // Lo cierra
        }
    }, [isOpen]);

    // Evita errores de renderizado en el servidor (como en Next.js)
    if (typeof window === 'undefined') return null;

    // 3. El Teletransportador (Portal)
    return createPortal(
        // 4. El HTML Inteligente
        <dialog
            ref={dialogRef}
            onClose={onClose} /* Sincroniza la tecla ESC con el estado de React */
            className="mi-dialogo"
        >
            <header className="dialog-header">
                <h3>{title}</h3>
                <button onClick={onClose} aria-label="Cerrar modal" className="btn-cerrar">
                    ✕
                </button>
            </header>

            <div className="dialog-body">
                {children}
            </div>
        </dialog>,
        document.body // Destino del portal
    );
}
