import styled from 'styled-components'

const StyledPayment = styled.section`
    margin-top: 15vh;

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

export { StyledPayment, StyledButton }