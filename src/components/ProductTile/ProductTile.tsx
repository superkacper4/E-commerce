import React, { useState } from 'react'
import { StyledBestseller, StyledProductImage, StyledProductDivImage, StyledProductTile, StyledButton } from './ProductTile.css'

interface ProductTileTypes {
    name: string;
    category: string;
    bestseller: boolean;
    price: number;
    image: {
        src: string;
        alt: string;
    };
}

const ProductTile = ({ name, category, price, bestseller, image }: ProductTileTypes) => {
    const [isHover, setHover] = useState(false);
    const addToCart = () => {
        console.log('add to cart')
    }


    return (
        <StyledProductTile onClick={() => setHover(!isHover)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <StyledProductDivImage>
                <StyledBestseller bestseller={bestseller}>Bestseller</StyledBestseller>
                <StyledProductImage src={image.src} />
                <StyledButton isHover={isHover}>Add to cart</StyledButton>
            </StyledProductDivImage>
            <h4>{category}</h4>
            <h2>{name}</h2>
            <h3>{price}</h3>
        </StyledProductTile>
    )
}

export default ProductTile