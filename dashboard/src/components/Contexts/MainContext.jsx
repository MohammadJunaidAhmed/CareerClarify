import { createContext, useEffect, useState} from "react"
import PropTypes from 'prop-types'


const mainContext = createContext();

export const MainContextProvider = ({children}) => {
    const [scH,setScH] = useState(window.innerHeight);
    const [scW,setScW] = useState(window.innerWidth);

    const [activePage, setActivePage] = useState('1');

    useEffect(() => {
        const handleResize = () => {
        setScH(window.innerHeight);
          setScW(window.innerWidth);
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Initial cleanup to remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array to run the effect once after initial render
    return (
        <mainContext.Provider value={{
            scW,scH,
            setScH,setScW,
            activePage, setActivePage
        }}
         >
            {children}
        </mainContext.Provider>
    )
}

MainContextProvider.propTypes={
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line react-refresh/only-export-components
export default mainContext;