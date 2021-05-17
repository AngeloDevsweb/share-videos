import React from 'react'
import {Link} from 'react-router-dom'

const Navegacion = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                        <div className="container">
                            
                            <Link className="brand" to="/">
                                ShareVideos
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">                                      
                                        <Link className="navigation" to="/">
                                            FEED
                                        </Link>
                                    </li>
                                    <li className="nav-item active">
                                        
                                        <Link className="navigation" to="/shareVideos">
                                            SHARE
                                        </Link>
                                    </li>

                                    <li className="nav-item active">
                                        
                                        <Link className="navigation" to="/CrearUsuario">
                                            CREAR USUARIO
                                        </Link>
                                    </li>
                                    
                                
                                </ul>
                            </div>
                        </div>
            </nav>
        </div>
    )
}

export default Navegacion
