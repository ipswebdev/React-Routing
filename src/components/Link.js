import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

function  Link({children,toUrl}){
    
    const {navigate, currentPath} = useContext(NavigationContext)
    
    const handleClick = (e) => {
        navigate(toUrl,e);
    }
    return (
        <a style={{'display':'inline-block','marginBottom':  '20px','borderLeft': currentPath === toUrl ?  '2px solid red' : '','fontWeight': currentPath === toUrl ?  'bold' : '','color': currentPath === toUrl ?  'red' : 'blue','paddingLeft':  '10px'}} onClick={handleClick} href={toUrl}>
           
            {children}
        </a>
    )
}

export default Link;