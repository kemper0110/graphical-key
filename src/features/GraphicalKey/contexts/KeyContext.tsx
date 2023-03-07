import React from "react";
import KeyStore from "../stores/KeyStore";


const KeyContext = React.createContext<KeyStore | undefined>(undefined);

interface KeyContextProviderProps {
    children: React.ReactNode,
    onSubmit: (password: string) => void
}

export const KeyContextProvider = ({children, onSubmit}: KeyContextProviderProps) => {
    const ref = React.useRef(new KeyStore(onSubmit));
    return (
        <KeyContext.Provider value={ref.current}>
            {children}
        </KeyContext.Provider>
    )
}

export const useKeyStore = () => {
    return React.useContext(KeyContext)!;
}


