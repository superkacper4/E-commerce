import styled from 'styled-components'

const StyledSort = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const StyledSelect = styled.select`
    border: none;
    text-align: center;
    appearance: none;

`;

const StyledSortButton = styled.button`
    background-color: transparent;
    border: none;
`;

const StyledSpan = styled.span`
        color: ${({ theme }) => theme.colors.fourth};
        font-weight: 100;
    
`;

export { StyledSelect, StyledSortButton, StyledSpan, StyledSort }