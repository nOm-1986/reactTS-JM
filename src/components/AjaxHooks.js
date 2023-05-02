import React,{useState, useEffect} from 'react';

function Pokemon({avatar,name}){
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        //Esta es la forma correcta de usar una función asincrona dentro del useEffect.
        //Si pongo el Async dentro de callback del useEffect se considera un antipatron. -> Mala practica.
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <>
            <h1>Peticiones Asíncronas en Hooks</h1>
             {pokemons.length == 0 ? (<h2>Cargando...</h2>):(
                pokemons.map((el) => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
            )}
        </>
    );
}
