import { createContext, useState} from "react"
import PropTypes from 'prop-types'
import { useEffect } from "react";

// TODO: CHANGE THE NAME OF THIS CONTEXT TO MAIN_CONTEXT;


const loginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLogin, setLogin] = useState(false);
    const [isClick, setIsClick] = useState(false);
    
    const [profName, setProfName] = useState("");
    const [profEmail, setProfEmail] = useState("");
    const [profMobile, setProfMobile] = useState("");
    const [profPassword, setProfPassword] = useState("");
    useEffect(()=>{
        const token = localStorage.getItem('userJwtToken');
        const userId = localStorage.getItem('userId');
        // console.log(token)
        // console.log(userId)
        if(token){
            setLogin(true);
        }
    },[])


    //SignIN
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    return (
        <loginContext.Provider value={{
            isLogin, setLogin,
            isClick, setIsClick,
            profName, setProfName,
            profEmail, setProfEmail,
            profMobile, setProfMobile,
            profPassword, setProfPassword,
            loginEmail, setLoginEmail,
            loginPassword, setLoginPassword,
         }}>
            {children}
        </loginContext.Provider>
    )
}

LoginContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default loginContext;