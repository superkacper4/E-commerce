import styled from 'styled-components'

const H2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
    padding: 10px 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
`;

export default H2