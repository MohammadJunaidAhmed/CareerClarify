import { createContext, useState} from "react"
import PropTypes from 'prop-types'


const loginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const [profName, setProfName] = useState("");
    const [profEmail, setProfEmail] = useState("");
    const [profMobile, setProfMobile] = useState("");
    const [profField, setProfField] = useState("");
    const [profPassword, setProfPassword] = useState("");


    //SignIN
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
     
    return (
        <loginContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            profName, setProfName,
            profEmail, setProfEmail,
            profMobile, setProfMobile,
            profField, setProfField,
            profPassword, setProfPassword,
            loginEmail, setLoginEmail,
            loginPassword, setLoginPassword,
        }}
         >
            {children}
        </loginContext.Provider>
    )
}

LoginContextProvider.propTypes={
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line react-refresh/only-export-components
export default loginContext;