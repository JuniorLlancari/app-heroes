import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin=()=>{
        history.push('/')
        // history.replace('/') -elimina el path de la historia

    }

    return (
        <div className="container mt-5">            
            <h1>login</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={handleLogin}
            >
                login
            </button>


        </div>
    )
}
