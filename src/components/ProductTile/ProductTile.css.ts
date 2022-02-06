import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ButtonTypes {
    isHover: boolean
}

interface BestsellerTypes {
    bestseller: boolean
}

interface ImageTypes {
    src: string;
}

const StyledProductTile = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
    padding: 0;
    overflow: hidden;
    text-decoration: none;
    

    @media (${({ theme }) => theme.breakPoints.desktop}){
        margin: 10px;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
        margin: 15px;
    }
`;

const StyledProductDivImage = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    text-align:center;
`;

const StyledProductImage = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url(${({ src }: ImageTypes) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;


const StyledButton = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    transform: ${({ isHover }: ButtonTypes) => isHover ? "translateY(0)" : "translateY(100%)"} ;
    transition: transform .5s;
    position: absolute;
    bottom: 0;
    left:0;
    text-transform: uppercase;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        cursor:pointer;
        transition: background-color .5s, transform .5s;
        &:hover{
            background-color: ${({ theme }) => theme.colors.fourth};
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

`;

export { StyledProductImage, StyledProductDivImage, StyledProductTile, StyledButton, StyledLink }