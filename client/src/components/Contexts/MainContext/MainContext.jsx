import { createContext, useEffect, useState} from "react"

// TODO: CHANGE THE NAME OF THIS CONTEXT TO MAIN_CONTEXT;


const mainContext = createContext();

// eslint-disable-next-line react/prop-types
export const MainContextProvider = ({children}) => {
    const [scH,setScH] = useState(window.innerHeight);
    const [scW,setScW] = useState(window.innerWidth);
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
        <mainContext.Provider value={{scW,scH,setScH,setScW}}>
            {children}
        </mainContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default mainContext;