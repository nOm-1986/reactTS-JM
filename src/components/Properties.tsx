import React from 'react';
type Props = {
    firstName: string,
    arreglo: (number|string)[],
    booleano: boolean;
    objeto : {
        nombre: string,
        email: string
    }
};

export const Properties = (props: Props): JSX.Element => {
    return (
        <>
            <ul>
                <li>Propiedades: {props.firstName}</li>
                <li>arreglo:{props.arreglo.join(", ")}</li>
                <li>Booleano: {props.booleano ? 'Verdadero' : 'Falso' }</li>
                <li>Objeto: {props.objeto.nombre + ' ' + props.objeto.email}</li>
            </ul>
        </>
    )
}

