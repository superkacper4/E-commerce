import styled from 'styled-components'
import { H2 } from '../../components'


const StyledProduct = styled.section`
    margin-top: 15vh;
    padding: 0 10px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        margin-top: 10vh;

    }
`;


const StyledTile = styled.div`
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    border-bottom:  1px solid ${({ theme }) => theme.colors.third};
`;

const StyledH2 = styled(H2)`
    font-size: 20px;
`;

const StyledImg = styled.img`
    max-width: 100%;
    height:100%;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        max-width: 50%;

    }
`;

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    text-align: justify;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px 20px;
    margin: 0;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width:50%;

    }
`
const StyledButton = styled.button`
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
`

export { StyledProduct, StyledTile, StyledDiv, StyledImg, StyledH2, StyledButton }