import React from "react";

function Login(){
    return(
        <div>
            Login
        </div>
    );
}

function Logout(){
    return(
        <div>
            Logout
        </div>
    );
}

// export default class RenderizadoCondicional extends Component {
//     construct(props: {}){
//         super(props);
//         this.estado = true;
//     }

//     render(): React.ReactNode {
//         return (
//             <div>
//                 <h2>
//                     Renderizado Condicional
//                 </h2>
//                     {estado? <Login/> : <Logout/>}
//             </div>
//         )
//     }
// }

export const RenderizadoCondicional = (props:{}): JSX.Element => {
    const isLoggedIn: boolean = true;

    if(isLoggedIn){
        return <Login></Login>
    } 
    return <Logout></Logout>
}
