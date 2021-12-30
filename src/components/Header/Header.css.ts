import styled from 'styled-components'
import { Link } from "react-router-dom";
import cartIMG from '../../assets/cart.png'

const StyledHeader = styled.header`
    width: 100%;
    height: 15vh;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    border-bottom: 4px solid ${({ theme }) => theme.colors.third};
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    z-index: 2;
    @media (${({ theme }) => theme.breakPoints.desktop}){
        height: 10vh;
    }
`;

const StyledLogo = styled.img`
    width: 100%;
    max-height: 100%;
`;

const StyledCartButton = styled.button`
    height: 32px;
    width: 32px;
    background-color: transparent;
    border: none;
    background-image: url(${cartIMG});
    background-repeat: no-repeat;
    position: relative;
`;

const StyledCounter = styled.div`
    padding: 1px 2px;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 0;
    right: 0;
`;

const StyledLink = styled(Link)`
    max-width: 50%;
    height: 80%;
    text-align:center;
    display: flex;
    align-items: center;
`;

export { StyledHeader, StyledLogo, StyledCartButton, StyledCounter, StyledLink }