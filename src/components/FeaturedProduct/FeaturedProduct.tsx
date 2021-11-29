import React from 'react'
import { H2 } from '..'
import { useCart } from '../../Context/context'
import { StyledFeatured, StyledProductImage, StyledProductDivImage, StyledFeaturedProduct, StyledButton, StyledH4, StyledP, StyledRecomendation, StyledRecomendationDiv, StyledH3, StyledSeparationDiv } from './FeaturedProduct.css'


interface ProductTileTypes {
    name: string;
    category: string;
    bestseller: boolean;
    price: number;
    image: {
        src: string;
        alt: string;
    };
    currency: string;
    details: null | {
        dimmentions: {
            width: number,
            height: number
        },
        size: number,
        description: string,
        recommendations: { src: string; alt: string; }[]
    };
}

const FeaturedProduct = ({ name, category, price, image, currency, details }: ProductTileTypes) => {
    const { cartContent, setCartContent, setCartOpen } = useCart()

    const addToCart = () => {
        setCartContent([...cartContent, {
            name: name,
            price: price,
            image: image,
            currency: currency
        }])
        setCartOpen(true)
    }

    return (
        <StyledFeaturedProduct>
            <H2>{name}</H2>
            <StyledProductDivImage>
                <StyledProductImage src={image.src} />
                <StyledFeatured>Photo of the day</StyledFeatured>
            </StyledProductDivImage>
            <StyledSeparationDiv>
                <StyledH4>About {name}</StyledH4>
                <StyledH3>{category}</StyledH3>
                <StyledP>{details?.description}</StyledP>
            </StyledSeparationDiv>
            <StyledSeparationDiv>
                <StyledH4>People also buy</StyledH4>
                <StyledRecomendationDiv>
                    {details?.recommendations.map(recomendation => (
                        <StyledRecomendation src={recomendation.src} key={recomendation.alt} />
                    ))}
                </StyledRecomendationDiv>


                <StyledH4>Details</StyledH4>
                <StyledP>Size: {details?.dimmentions.width} X {details?.dimmentions.height}</StyledP>
                <StyledP>Size: {details?.size} MB</StyledP>
            </StyledSeparationDiv>

            <StyledButton onClick={addToCart}>Add to cart</StyledButton>
        </StyledFeaturedProduct>
    )
}

export default FeaturedProduct