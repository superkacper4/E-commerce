import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Sort } from '../../components'


interface Types {
    isPage: boolean
}

const StyledMain = styled.section`
    width: 100%;
    height: auto;
    padding: 15vh 10px 10px;

    @media (${({ theme }) => theme.breakPoints.desktop}){
    padding: 10vh 50px 10px;
    }
`;

const StyledProductsFilterDiv = styled.div`

    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: grid; 
        grid-template-columns: 0.3fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". ."; 
        width: 100%; 
        height: 100%; 
    }

`;

const StyledProducts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.fourth};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-decoration: none;
    padding: 0 5px;
    font-weight: 100;
`;

const StyledSpan = styled.span<Types>`
    ${({ isPage, theme }) => isPage ?
        css`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;

    @media (${theme.breakPoints.desktop}){
        &:hover{
            color: ${({ theme }) => theme.colors.fourth};
        }
    }
    `:
        css`
        color: ${({ theme }) => theme.colors.fourth};
        font-weight: 100;
    
        @media (${theme.breakPoints.desktop}){
            &:hover{
                color: ${({ theme }) => theme.colors.text};
            }
        }
        `

    }  
`;

const StyledDiv = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`;

const StyledArrow = styled(Link)`
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.fourth};
    font-weight: 100;
`;

const StyledParamsDiv = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;

`;

const StyledImg = styled.img`
    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: none;
    }
`;


const StyledSort = styled(Sort)`
    display: none;
    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: flex;
    }
`;



export { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow, StyledProducts, StyledParamsDiv, StyledImg, StyledSort, StyledProductsFilterDiv }