import styled from 'styled-components'
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
`;

const StyledLogo = styled.img`
    max-width: 50%;
    max-height: 100%;
`;

const StyledCartButton = styled.button`
    height: 32px;
    width: 32px;
    background-color: transparent;
    border: none;
    background-image: url(${cartIMG});
    background-repeat: no-repeat;
`;

export { StyledHeader, StyledLogo, StyledCartButton }