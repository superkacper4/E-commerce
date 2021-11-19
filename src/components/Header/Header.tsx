import React from 'react'
import { StyledHeader, StyledLogo, StyledCartButton } from './Header.css'
import logoIMG from '../../assets/logo.png'
import { useCart } from '../../Context/context'

const Header = () => {
    const { isCartOpen, setCartOpen } = useCart()

    const openCart = () => {
        setCartOpen(!isCartOpen)
        console.log(isCartOpen)
    }

    return (
        <StyledHeader>
            <StyledLogo src={logoIMG} alt="BENJAMAS" />
            <StyledCartButton onClick={openCart} />

        </StyledHeader>
    )
}

export default Header