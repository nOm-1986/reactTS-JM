import React,{useState, useEffect} from "react";

export const ScrollHooks = (): JSX.Element => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        console.log('Moviendo Scroll');
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll);
        console.log(scrollY);
        return() => {
            window.removeEventListener('scroll', detectarScroll);
            console.log('Fase de Desmontaje');
        };

    }, [scrollY]);


    useEffect(() => {
        console.log('Fase de Montaje');
    }, []);//[] Con esto solo se ejecuta una sola vez

    //Esto es una mala practica, dejarla 
    useEffect(() => {
        console.log('Fase de Actualización');
    });

    /** Implementando la fase de desmontaje */
    useEffect(() => {
        return () => {

        };
    });

    return (
        <>
            <h2>Hooks - useEffect and Cycling life</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    );
}