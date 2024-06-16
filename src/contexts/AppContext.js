import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <AppContext.Provider value={{ isBurgerMenuOpen, toggleBurgerMenu }}>
            {children}
        </AppContext.Provider>
    )
}