import React from 'react'
import { StyledHeader, StyledLogo, StyledCartButton, StyledCounter, StyledLink } from './Header.css'
import logoIMG from '../../assets/logo.png'
import { useCart } from '../../Context/context'

const Header = () => {
    const { isCartOpen, setCartOpen, cartContent } = useCart()

    const openCart = () => {
        setCartOpen(!isCartOpen)
        console.log(isCartOpen)
    }

    return (
        <StyledHeader>
            <StyledLink to='/0'>
                <StyledLogo src={logoIMG} alt="Nextrope" />
            </StyledLink>
            <StyledCartButton onClick={openCart} >
                {cartContent.length <= 0 ? null :
                    <StyledCounter>{cartContent.length}</StyledCounter>
                }

            </StyledCartButton>

        </StyledHeader>
    )
}

export default Header