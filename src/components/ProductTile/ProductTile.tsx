import React, { useState } from 'react'
import { useCart } from '../../Context/context';
import { H2, H3, H4 } from '..';
import { StyledBestseller, StyledProductImage, StyledProductDivImage, StyledProductTile, StyledButton } from './ProductTile.css'

interface BooksTypes {
    id: number;
    title: string;
    author: string;
    cover_url: string;
    pages: number;
    price: number;
    currency: string;
}

const ProductTile = ({ title, id, price, author, cover_url, currency, pages }: BooksTypes) => {
    const [isHover, setHover] = useState(false);
    const { setCartContent, cartContent, setCartOpen } = useCart()

    const addToCart = () => {
        if (cartContent.some(item => item.title === title)) {
            console.log('koszyk:', cartContent)
        }
        else {
            setCartContent([...cartContent, {
                title,
                price,
                cover_url,
                currency,
                pages,
                author,
                id,
            }])
            setCartOpen(true)
        }
    }


    return (
        <StyledProductTile onClick={() => setHover(true)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <StyledProductDivImage>
                <StyledProductImage src={cover_url} />
                <StyledButton isHover={isHover} onClick={addToCart}>Add to cart</StyledButton>
            </StyledProductDivImage>
            <H4>{author}</H4>
            <H2>{title}</H2>
            <H3>{price}
                {(() => {
                    switch (currency) {

                        case 'EURO': return 'Є'
                        case "PLN": return 'PLN'

                        default: return '$'
                    }
                })()}
            </H3>
            <H4>{pages} pages</H4>
        </StyledProductTile>
    )
}

export default ProductTile