import React, { useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface Types {
    children: ReactNode
}

interface ContextTypes {
    isCartOpen: boolean;
    setCartOpen: Dispatch<SetStateAction<boolean>>
}

const CartContext = React.createContext<ContextTypes>({
    isCartOpen: false,
    setCartOpen: () => null
})

export const CartProvider = ({ children }: Types) => {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);

    return (
        <CartContext.Provider value={{ isCartOpen, setCartOpen }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => React.useContext(CartContext)