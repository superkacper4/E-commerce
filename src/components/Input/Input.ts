import styled from 'styled-components'

const Input = styled.input`
    border: none;
    border-bottom: 4px solid ${({ theme }) => theme.colors.third};
    width: 100%;
    max-width:500px; 
    background-color: transparent;
    text-align: center;
    margin: 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
`;

export default Input