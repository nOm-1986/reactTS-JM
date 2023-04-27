import React, {useState, useEffect} from 'react';

function Reloj({hora}:any){
    return <h3>{hora}</h3>
}



export const RelojHooks = (): JSX.Element => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        let temporizador;

        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(temporizador);
        }

        return () => {
            console.log("Fase de Desmontaje")
        }
    }, [visible]);

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick={() => setVisible(true)}>⌛ Iniciar</button>
            <button onClick={() => setVisible(false)}>⏳ Detener</button>
        </>
    );
}