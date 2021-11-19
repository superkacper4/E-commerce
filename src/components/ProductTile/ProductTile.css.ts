import styled from 'styled-components'

interface ButtonTypes {
    isHover: boolean
}

interface BestsellerTypes {
    bestseller: boolean
}

const StyledProductTile = styled.div`
    width: 100vw;
    margin: 0;
    padding: 0;
    border: 1px solid black;
`;

const StyledProductDivImage = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
`;

const StyledProductImage = styled.img`
    height: auto;
    width: 100%;

`;

const StyledBestseller = styled.div`
    min-width: 40%;
    position : absolute;
    left: 0;
    top: 0;
    padding: 5px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: ${({ bestseller }: BestsellerTypes) => bestseller ? "scale(1)" : "scale(0)"} ;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    transform: ${({ isHover }: ButtonTypes) => isHover ? "translateY(0)" : "translateY(100%)"} ;
    transition: transform .5s;
    position: absolute;
    bottom: 0;
    left:0;
    text-transform: uppercase;
`;

export { StyledBestseller, StyledProductImage, StyledProductDivImage, StyledProductTile, StyledButton }