
import React, {useContext} from 'react';
import './styles.sass';
import Button from '../../shared/Button';
import { AuthContext } from '../../core/context/AuthContext';

const RegisterPage = () => {

    const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading} = useContext(AuthContext);


    return(
        <div>
            <form className='form' onSubmit={registerUser}>
                <div className="row">
                    <div className="col">
                        <div className="block">
                            <h2 className='text'>Register</h2>
                        </div>
                        <div className="block">
                            <label htmlFor="name"></label>
                            <input 
                                id="name" 
                                className='input' 
                                type="text" 
                                placeholder='Name'
                                onChange={(e) => 
                                    updateRegisterInfo({...registerInfo, name: e.target.value})}
                            />

                            <label htmlFor="email"></label>
                            <input 
                                id="email" 
                                className='input' 
                                type="email" 
                                placeholder='Email'
                                onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value})}
                            />

                            <label htmlFor="password"></label>
                            <input 
                                id="password" 
                                className='input' 
                                type="text" 
                                placeholder='Password'
                                onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value})}
                            />

                            <Button text='Register' type={isRegisterLoading ? 'Creating your account' : 'Register'}/>
                            {
                                registerError?.error && (
                                    <div className='alert'>
                                        <p className='text'>{registerError?.message}</p>
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

export default RegisterPage;