import { createContext, useState} from "react"
import PropTypes from 'prop-types'


const loginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <loginContext.Provider value={{
            isLoggedIn, setIsLoggedIn
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