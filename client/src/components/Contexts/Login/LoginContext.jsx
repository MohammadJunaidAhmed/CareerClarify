import { createContext, useState} from "react"


const loginContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoginContextProvider = ({children}) => {
    const [isLogin, setLogin] = useState(false);
    return (
        <loginContext.Provider value={{isLogin, setLogin}}>
            {children}
        </loginContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default loginContext;