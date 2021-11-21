import styled from 'styled-components'

const H4 = styled.h4`
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    padding: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.fourth};
`;

export default H4