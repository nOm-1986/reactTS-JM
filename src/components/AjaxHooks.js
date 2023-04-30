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
