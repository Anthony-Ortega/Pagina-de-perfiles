import { useState } from "react"

/* function tema(){
    return (
        <h1> Taller de Anthony Ortega</h1>
    )
}
 */

const Navbar = () => {
    const [user, setUser] = useState(null)


    const login = () => {
        setUser({id:1,nombre:"Aortegas"})
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <nav className="navbar navbar-light bg-primary bg-gradient">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 fs-4 text-light">User:{user ? user.nombre : "No autentificado"} </span>
              { user 
                ? ( <button 
                        type="button" 
                        className="btn btn-outline-warning"
                        onClick = {logout}
                        >Cerrar Sesion
                   </button>) 
                : ( <button 
                        type="button" 
                        className="btn btn-outline-warning"
                        onClick = {login}
                        >Iniciar Sesion
                    </button>)

              }
              
              
            </div>
        </nav>
    )
}
export default Navbar