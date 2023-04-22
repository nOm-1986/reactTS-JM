import React, {useState} from "react";

export const ContadorHooks = (props: {titulo: string}): JSX.Element => {

    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return(
        <>
            <h2>Hook - useState - {props.titulo}</h2>
            <nav>
                <button onClick = {sumar}>➕</button>
                <button onClick = {restar}>➖</button>
            </nav>
            <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
    titulo: 'Clicks'
}