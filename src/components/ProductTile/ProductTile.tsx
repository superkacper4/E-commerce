import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/context';
import { H2, H3, H4, Input } from '..';
import { StyledBestseller, StyledProductImage, StyledProductDivImage, StyledProductTile, StyledButton } from './ProductTile.css'

interface CategoriesTypes {
    id: string;
    name: string;
}

interface BooksTypes {
    id: string;
    name: string;
    categories: CategoriesTypes[];
    image: string;
    pages: number;
    price: number;
}

const ProductTile = ({ name, id, price, categories, image }: BooksTypes) => {
    const [isHover, setHover] = useState(false);
    const { setCartContent, cartContent, setCartOpen } = useCart()

    const addToCart = () => {
        if (cartContent.some(item => item.name === name)) {
            console.log('koszyk:', cartContent)
        }
        else {
            setCartContent([...cartContent, {
                name,
                price,
                image,
                categories,
                id,
            }])
            setCartOpen(true)
        }
    }


    return (
        <StyledProductTile onClick={() => setHover(true)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} as={Link} to={`product/${id}`}>
            <StyledProductDivImage>
                <StyledProductImage src={image} />
                <StyledButton isHover={isHover} onClick={addToCart}>Add to cart</StyledButton>
            </StyledProductDivImage>
            {categories.map(category => (
                <H3 key={category.id} >{category.name}</H3>
            ))}
            <H2>{name}</H2>
            <H3>{price} </H3>
        </StyledProductTile>
    )
}

export default ProductTile