import React, { useState } from 'react'
import { useCart } from '../../Context/context';
import { H2, H3, H4 } from '..';
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
    currency: string
}

const ProductTile = ({ name, category, price, bestseller, image, currency }: ProductTileTypes) => {
    const [isHover, setHover] = useState(false);
    const { setCartContent, cartContent } = useCart()

    const addToCart = () => {
        if (cartContent.some(item => item.name === name)) {
            console.log('koszyk:', cartContent)
        }
        else {
            setCartContent([...cartContent, {
                name: name,
                price: price,
                category: category,
                bestseller: bestseller,
                image: image,
                currency: currency
            }])
            console.log('add to cart', cartContent)
        }
    }


    return (
        <StyledProductTile onClick={() => setHover(true)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <StyledProductDivImage>
                <StyledBestseller bestseller={bestseller}>Bestseller</StyledBestseller>
                <StyledProductImage src={image.src} />
                <StyledButton isHover={isHover} onClick={addToCart}>Add to cart</StyledButton>
            </StyledProductDivImage>
            <H4>{category}</H4>
            <H2>{name}</H2>
            <H3>
                {(() => {
                    switch (currency) {

                        case 'EURO': return 'Є'
                        case "PLN": return 'PLN'

                        default: return '$'
                    }
                })()}
                {price}</H3>
        </StyledProductTile>
    )
}

export default ProductTile