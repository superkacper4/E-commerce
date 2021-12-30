import styled from 'styled-components'
import { Sort, P } from '..'

interface ParamsPanelTypes {
    isParamsPanelOpen: boolean;
}

const StyledParamsPanel = styled.div<ParamsPanelTypes>`
    width: 100%;
    height: 85vh;
    margin: 0;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: scroll;

    position: fixed;
    z-index: 3;
    top: 15vh;
    left: 0;

    transform: ${({ isParamsPanelOpen }) => isParamsPanelOpen ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform .5s;


    @media (${({ theme }) => theme.breakPoints.desktop}){
        width:100%;
        height: auto;
        z-index: 1;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
        overflow: auto;
    }
`;

const StyledSort = styled(Sort)`
    display: block;
    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: none;
    }
`;


const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 5px;
    display:block;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: none;
    }
`;

const StyledInputDiv = styled.div`
    display: flex;
    width: 100%;
    text-transform: capitalize;
    margin: 10px 0;
`;

const StyledP = styled(P)`
    font-weight: 800;
`;

export { StyledParamsPanel, StyledSort, StyledCloseButton, StyledInputDiv, StyledP }