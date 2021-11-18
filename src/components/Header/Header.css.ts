import styled from 'styled-components'
import cartIMG from '../../assets/cart.png'

const StyledHeader = styled.header`
    width: 100%;
    height: 15vh;
    margin: 0;
    padding: 0;
    border-bottom: 4px solid ${({ theme }) => theme.colors.third};
    display: flex;
    justify-content: space-around;
    align-items: center;
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