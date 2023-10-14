import {createContext, useState, useEffect} from 'react';
import { useCallback } from 'react';
import { baseUrl, postRequest } from '../utils/services';

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [ registerError, setRegisterError] = useState(null);
    const [ isRegisterLoading, setIsregisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [ loginError, setLoginError] = useState(null);
    const [ isLoginLoading, setIsloginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const user = localStorage.getItem('User');

        setUser(JSON.parse(user));
    }, [])

    const loginUser = useCallback(async (e) => {


        e.preventDefault();


        setIsloginLoading(true);

        setLoginError(null);


        const response = await postRequest(
            `${baseUrl}/users/login`,
            JSON.stringify(loginInfo)
        )

        setIsloginLoading(false)

        if(response.error){
            return setLoginError(response);
        }

        localStorage.setItem('User', JSON.stringify(response));
        setUser(response);
        
    }, [loginInfo]);

    const logoutUser = useCallback (() => {
        localStorage.removeItem('User');
        setUser(null);
    }, []);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, [])

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const registerUser = useCallback(async (e) => {
        e.preventDefault();

        setIsregisterLoading(true)
        setRegisterError(null)

        const response =  await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

        setIsregisterLoading(false)

        if (response.error){
            return setRegisterError(response);
        }

        localStorage.setItem('User', JSON.stringify(response))
        setUser(response)
    }, [registerInfo])
    
    return (
        <AuthContext.Provider 
            value={{    
                user,
                registerInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegisterLoading,
                logoutUser,
                loginUser,
                loginError,
                loginInfo,
                updateLoginInfo,
                isLoginLoading

            }}>
            {children}
        </AuthContext.Provider>
    )
}
