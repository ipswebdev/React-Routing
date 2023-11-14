import NavigationContext from "../context/NavigationContext";
import { useContext } from "react";


function RouteRenderer({path,children}){
    const currentPath = useContext(NavigationContext)
    if(path === currentPath.currentPath){
        return children;
    }
    return null;
}

export default RouteRenderer;