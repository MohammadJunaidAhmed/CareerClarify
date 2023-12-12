import { createContext, useState} from "react"

// TODO: CHANGE THE NAME OF THIS CONTEXT TO MAIN_CONTEXT;


const loginContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoginContextProvider = ({children}) => {
    const [isLogin, setLogin] = useState(true);
    const [isClick, setIsClick] = useState(false);
    return (
        <loginContext.Provider value={{isLogin, setLogin, isClick, setIsClick}}>
            {children}
        </loginContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default loginContext;