import React from 'react';
type Props = {
    firstName: string,
    arreglo: (number|string)[],
    booleano: boolean,
    objeto : {
        nombre: string,
        email: string
    },
    elementoReact: JSX.Element,
    funcion: any,
    componenteReact: any
};

export const Properties = (props: Props): JSX.Element => {
    return (
        <>
            <ul>
                <li>Propiedades: {props.firstName}</li>
                <li>arreglo:{props.arreglo.join(", ")}</li>
                <li>Booleano: {props.booleano ? 'Verdadero' : 'Falso' }</li>
                <li>Objeto: {props.objeto.nombre + ' ' + props.objeto.email}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </>
    )
}

