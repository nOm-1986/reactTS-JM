import React,{useState, useEffect} from "react";
type UsersApi = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}


const defaultUser:UsersApi = {
    id: 1,
    email: 'joshefbeltran@gmail.com',
    first_name: 'Jose Fabian',
    last_name:'Beltran Meza',
    avatar:'Nothing'
}

export const CicloVidaFetch = ():JSX.Element => {
    const [users, setUsers] = useState<[UsersApi]>([defaultUser]);
    
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then(data => data.json())
            .then(json => setUsers(json.data));
    }, []);
    
    return(
        <>
            <h1>Using Fetch to get data</h1>
            <ul>
                {   
                    users.length === null ? (<h3>Cargando...</h3>):(
                        users.map(user => ( 
                                <li>{user.id} --- {user.first_name} --- {user.last_name}</li>
                            )
                        )
                    )
                }
            </ul>
        </>
    );
}

