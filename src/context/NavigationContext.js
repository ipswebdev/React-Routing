import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}){
    const urlPath = window.location.pathname;
    const [currentPath, setCurrentPath] = useState(urlPath)

    const navigate = (toUrl,event={}) => {
        if((event.metaKey || event.ctrlKey)){
            return ;
        }
        event.preventDefault();
        window.history.pushState({},'',toUrl)
        setCurrentPath(toUrl);
    }

    useEffect(()=>{
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',handler);
        return ()=>{
            window.removeEventListener('popstate',handler);    
        }
    },[])

    return (
        <NavigationContext.Provider value={{navigate,currentPath}}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;