import React, { useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface Types {
    children: ReactNode
}


interface CartObject {
    id: number;
    title: string;
    author: string;
    cover_url: string;
    pages: number;
    price: number;
    currency: string;
    quantity: number
}

interface CartTypes {
    isCartOpen: boolean;
    setCartOpen: Dispatch<SetStateAction<boolean>>;
    cartContent: CartObject[];
    setCartContent: Dispatch<SetStateAction<CartObject[]>>;
}

const CartContext = React.createContext<CartTypes>({
    isCartOpen: false,
    setCartOpen: () => null,
    cartContent: [],
    setCartContent: () => null,
})

export const CartProvider = ({ children }: Types) => {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);
    const [cartContent, setCartContent] = useState<CartObject[]>([])

    return (
        <CartContext.Provider value={{ isCartOpen, setCartOpen, cartContent, setCartContent }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => React.useContext(CartContext)