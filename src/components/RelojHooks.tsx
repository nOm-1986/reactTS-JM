import React, {useState, useEffect} from 'react';

function Reloj(hora:any){
    return <h3>{hora}</h3>
}



export const RelojHooks = (): JSX.Element => {
    const [hora, setHora] = useState<string>(new Date().toLocaleDateString());
    const [visible, setVisible] = useState<boolean>(true);

    const tictac = (valor:boolean) => {}

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick={() => setVisible(true)}>⌛ Iniciar</button>
            <button onClick={() => setVisible(false)}>⏳ Detener</button>
        </>
    );
}