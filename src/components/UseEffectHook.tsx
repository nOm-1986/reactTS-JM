import React, {useState, useEffect} from "react";


export const UseEffectHook = ():JSX.Element => {
    const [counter, setCounter] = useState(0);
    const [campo, setCampo] =  useState('');
    //const [clickCounter, setClickCounter] = useState(0);

    const sumar = () => setCounter(counter + 1);
    const restar = () => setCounter(counter - 1);

    useEffect(() => {
        console.log('Throwing useEffect from campo');
    }, [campo]);

    //I can have many useEffects that I want.
    useEffect(() => {
        console.log('Throwing useEffect from counter');
    }, [counter]);

    return (
        <div>
            <h2>Hook - useState</h2>
            <p>{counter}</p>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <hr />
            <br />
            <h2>Modificando input con useState</h2>
            <input type="text" onChange={(e)=>{setCampo(e.target.value)}} />
            <br/>
            <p>{campo}</p>
            <hr />

        </div>
    );
}