import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface Types {
    isPage: boolean
}

const StyledMain = styled.section`
    width: 100%;
    height: auto;
    padding: 15vh 10px 0;
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

export { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow }