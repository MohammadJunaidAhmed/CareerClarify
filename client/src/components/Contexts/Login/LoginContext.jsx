import { createContext, useState} from "react"
import PropTypes from 'prop-types'

// TODO: CHANGE THE NAME OF THIS CONTEXT TO MAIN_CONTEXT;


const loginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLogin, setLogin] = useState(true);
    const [isClick, setIsClick] = useState(false);
    return (
        <loginContext.Provider value={{isLogin, setLogin, isClick, setIsClick}}>
            {children}
        </loginContext.Provider>
    )
}

LoginContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default loginContext;