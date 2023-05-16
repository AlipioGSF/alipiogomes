import { createContext, useState } from "react";

export const LocalContext = createContext();

export function CurrentLocal({children}){
    const [currentLocal, setCurrentLocal] = useState("Sobre Mim");

    return(
    <LocalContext.Provider value={{currentLocal, setCurrentLocal}}>
        {children}
    </LocalContext.Provider>
    )
}
