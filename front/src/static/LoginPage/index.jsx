import React, { useContext } from 'react';
import './styles.sass';
import Button from '../../shared/Button';
import { AuthContext } from '../../core/context/AuthContext';

const LoginPage = () => {

    const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } = useContext(AuthContext)
    return(
        <div>
            <form className='form' onSubmit = {loginUser}>
                <div className="row">
                    <div className="col">
                        <div className="block">
                            <h2 className='text'>Login</h2>
                        </div>
                        <div className="block">

                            <label htmlFor="email"></label>
                            <input 
                                id="email" 
                                className='input' 
                                type="email" 
                                placeholder='Email'
                                onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}
                            />

                            <label htmlFor="password"></label>
                            <input 
                                id="password" 
                                className='input' 
                                type="text" 
                                placeholder='Password'
                                onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}
                            />

                            <Button text={isLoginLoading? 'Getting you in...' : 'Login'} type='submit'/>
                            

                            {
                                loginError?.error && (
                                    <div className='alert'>
                                        <p className='text'>{loginError?.message}</p>
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;