import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.sass';
import { AuthContext } from '../../core/context/AuthContext';


const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext);
    return(
        <div className='nav-bar'>
            <div className="container">
                <div className="nav-blocks">
                    <div className="logo">
                        <h2 className='title'>
                            <Link to="/">Chat</Link>
                        </h2>
                    </div>
                    <div className="registered-as">
                      {user && <p className='registered'>Logged in chat as {user?.name}</p>}
                    </div>
                    <div className='nav'>
                        <div className="stack">
                            {user && (
                                <>
                                 <Link 
                                    onClick={() => logoutUser()}
                                    to='login' 
                                    className='link'
                                    >Logout</Link>
                                </>
                            )}

                            {!user && (
                                <>
                                 <Link 
                                    onClick={() => logoutUser()}
                                    to='login' 
                                    className='link'
                                    >Login</Link>
                                 <Link 
                                    to='register' 
                                    className='link'
                                    >Register</Link>
                                </>
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

