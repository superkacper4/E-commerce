import styled from 'styled-components'

const P = styled.p`
    padding: 0;
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.ssm};

`;

export default P