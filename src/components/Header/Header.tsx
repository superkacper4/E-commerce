import React from 'react'
import { StyledHeader, StyledLogo, StyledCartButton } from './Header.css'
import logoIMG from '../../assets/logo.png'

const Header = () => (
    <StyledHeader>
        <StyledLogo src={logoIMG} alt="BENJAMAS" />
        <StyledCartButton />

    </StyledHeader>
)

export default Header