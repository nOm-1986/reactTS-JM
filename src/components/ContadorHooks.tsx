import React, {useState} from "react";

//Esta seria la forma tradicional.
//export const ContadorHooks = (props: {titulo: string}): JSX.Element => {
//De esta forma aplico directamente la destructuración y me ahorro despues el props.titulo
export const ContadorHooks = ({titulo}: {titulo: string}): JSX.Element => {

    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return(
        <>
            <h2>Hook - useState - {titulo}</h2>
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