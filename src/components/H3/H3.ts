import styled from 'styled-components'

const H3 = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0;
    padding: 0;
    width: 100%;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.fourth};

`;

export default H3