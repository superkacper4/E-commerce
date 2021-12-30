import styled from 'styled-components'
import { Link } from "react-router-dom";
import { H2 } from '../../components'

const StyledSummary = styled.div`
    min-height: 85vh;
    margin-top: 15vh;
    width: 100%;
    border: 4px solid ${({ theme }) => theme.colors.third};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        min-height: 90vh;
    }
`;

const StyledProduct = styled.div`
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:  1px solid ${({ theme }) => theme.colors.third};
`;

const StyledH2 = styled(H2)`
    font-size: 20px;
`;

const StyledImg = styled.img`
    max-width: 50%;
    height:100%;
`;

const StyledDiv = styled.div`
    width: 50%;
    padding:0;
    margin: 0;
`

const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 5px;
    @media (${({ theme }) => theme.breakPoints.desktop}){
        cursor: pointer;
    }
`;

const StyledClearButton = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    @media (${({ theme }) => theme.breakPoints.desktop}){
        cursor: pointer;
        transition: color .5s, background-color 0.5s;

        &:hover{
            color: ${({ theme }) => theme.colors.primary};
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

const StyledLink = styled(Link)`
    display: block;
    text-align:center;
    text-decoration: none;
    width: 100%;
    padding: 10px 0;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    @media (${({ theme }) => theme.breakPoints.desktop}){
        cursor: pointer;
        transition: color .5s, background-color 0.5s;

        &:hover{
            color: ${({ theme }) => theme.colors.primary};
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

export { StyledSummary, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton, StyledH2, StyledLink }