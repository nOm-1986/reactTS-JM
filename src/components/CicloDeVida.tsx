import React, { Component } from "react";

interface IProps {};
interface IState{
    hora: string
}

export default class CicloVida extends Component<IProps, IState> {

    temporizador: any;
    
    constructor(props: IProps){
        super(props);
        console.log(0, "El componente se inicializa, aún NO esta en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString()
        };
        this.temporizador = null;
        
    }

    componentDidMount(): void {
        console.log(1, 'El componente ya se encuentra en el DOM');
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        console.log(2, 'El estado o las props del componente');
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () => {
        this.tictac();
    }

    detener = () => {
        clearInterval(this.temporizador);
    }

    render(): React.ReactNode {

        console.log(4, "El componente se dibuja(o redibuja por algún cambio) en el DOM");
        return(
            <>
                <h2>Ciclo de vida de un componente</h2>
                <p>Hora: {this.state.hora}</p>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}