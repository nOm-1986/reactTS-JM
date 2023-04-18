import React from "react";
import data from "../helpers/data.json";

const season: string[] = ['Summer','Winter','Autumn','Spring'];

function ElementoLista(props:{url:string, nombre:string, blank:string}):JSX.Element{
    return(
        <li>
            <a href={props.url} target={props.blank}>{props.nombre}</a>
        </li>
    );
} 

export const RenderizadoElemento = ():JSX.Element => {
    return (
        <div>
            <ul>
                { season.map( (el) => <li key={el}>{el}</li> ) } 
            </ul>
            <hr />
            <ul>
                {
                    data.frameworks.map( (el) => (
                            < ElementoLista key={el.id} url={el.web} nombre={el.name} blank="_blank" />
                        )
                    )
                }
            </ul>
        </div>
    );
}