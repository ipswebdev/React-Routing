import { createContext } from "react";

const contextValue = {
    a:1,
    b:'b',
    c:true,
}
const PracticeContext = createContext();

function PracticeProvider({children}){
    

    return (
        <PracticeContext.Provider value={contextValue}>
            {children}
        </PracticeContext.Provider>
    )
}

export { PracticeProvider };
export default PracticeContext;