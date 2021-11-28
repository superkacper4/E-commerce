import styled from 'styled-components'
import { H4, P, H3 } from '..'

interface ImageTypes {
    src: string;
}

const StyledFeaturedProduct = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 0;
    overflow: hidden;
    border-bottom: 4px solid ${({ theme }) => theme.colors.third};
    
    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const StyledProductDivImage = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    text-align:center;
`;

const StyledProductImage = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url(${({ src }: ImageTypes) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const StyledFeatured = styled.div`
    min-width: 40%;
    position : absolute;
    left: 0;
    bottom: 0;
    padding: 15px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledButton = styled.button`
    width: 100%;
    max-width: 400px;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    transition: transform .5s;
    text-transform: uppercase;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        cursor:pointer;
        transition: background-color .5s, transform .5s;
        margin: 10px;
        &:hover{
            background-color: ${({ theme }) => theme.colors.fourth};
        }
    }
`;

const StyledH4 = styled(H4)`
    color:${({ theme }) => theme.colors.text};
    font-size:${({ theme }) => theme.fontSize.m};
    padding: 10px 0 0 0;
`;

const StyledH3 = styled(H3)`
    color:${({ theme }) => theme.colors.fourth};
    font-weight: 100;
    font-size:${({ theme }) => theme.fontSize.m};
    padding: 10px 0 0 0;
    display:none;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        display: inline;
    }
`;

const StyledP = styled(P)`
    color:${({ theme }) => theme.colors.fourth};
    font-size:${({ theme }) => theme.fontSize.ssm};
`;

const StyledRecomendation = styled.div`
    width: 30%;
    max-width: 150px;
    height: 20vh;
    background-image: url(${({ src }: ImageTypes) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const StyledRecomendationDiv = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 0 0 0;
`;

const StyledSeparationDiv = styled.div`
    @media (${({ theme }) => theme.breakPoints.desktop}){
    width: 60%;
    padding: 0 10px 0 0;
    &:nth-of-type(2n+1){
        width: 40%;
        padding: 0 0 0 10px;

        h4, p, h3{
        text-align: right;
        }
    }
    }    

`;

export { StyledFeatured, StyledProductImage, StyledProductDivImage, StyledFeaturedProduct, StyledButton, StyledH4, StyledP, StyledRecomendation, StyledRecomendationDiv, StyledH3, StyledSeparationDiv }
