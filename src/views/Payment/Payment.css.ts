import styled from 'styled-components'

const StyledPayment = styled.section`
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
`;

const StyledInfo = styled.div`
    width: 80%;
    margin: 10px;
    padding: 10px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.third};
    font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export { StyledPayment, StyledButton, StyledForm, StyledInfo }