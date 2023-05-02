import React from "react";
import { UseFetch } from "../hooks/useFetch";

export const HooksPersonalizados = () => {
    //console.log(UseFetch());
    let url1 = "https://pokeapi.co/api/v2/pokemons/";
    let url = 'https://jsonplaceholder.typicode.com/users';
    let {data, isPendig, error} = UseFetch(url);

    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPendig)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <h3>{JSON.stringify(data, undefined, 2)}</h3>
        </>
    );
}