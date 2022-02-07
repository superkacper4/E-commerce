import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../Context/context'
import { H3, P } from '../../components'
import { StyledProduct, StyledTile, StyledDiv, StyledImg, StyledH2, StyledButton, StyledLink } from './Product.css'

interface CategoriesTypes {
    id: string;
    name: string;
}

interface ProductsTypes<T = number> {
    id: string;
    name: string;
    categories: CategoriesTypes[];
    image: string;
    description: string;
    pages: number;
    price: T;
    currency: string;
}


const Product = () => {
    const [product, setProduct] = useState<ProductsTypes | undefined>()

    const { id, page } = useParams()
    const { cartContent, setCartContent, setCartOpen } = useCart()


    useEffect(() => {
        fetch('https://reasonapps-gql-api.vercel.app/api/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: `{
                  products {
                    name
                    id
                    image
                    description
                    price
                    categories{
                        id
                        name
                    }
                    }
                }`
            })
        })
            .then(response => response.json())
            .then(data => {

                setProduct(data.data.products.find((product: ProductsTypes<string>) => product.id === id))

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [])

    if (!product) return null;

    const addToCart = () => {
        if (cartContent.some(item => item.name === product?.name)) {
            console.log('koszyk:', cartContent)
        }
        else {
            setCartContent([...cartContent, {
                name: product?.name,
                price: product?.price,
                image: product?.image,
                categories: product?.categories,
                id: product?.id,
            }])
            setCartOpen(true)
        }
    }

    return (
        <StyledProduct>
            <StyledLink to={`/${page}`}>Back to products</StyledLink>
            <StyledTile>
                <StyledH2>
                    {product?.name}
                </StyledH2>

                <StyledDiv>

                    {product?.categories.map(category =>
                        <H3 key={category.id}>
                            {category.name}
                        </H3>
                    )}
                    <P>{product.description}</P>
                    <H3>{product?.price} $</H3>
                </StyledDiv>

                <StyledImg src={product?.image} />

            </StyledTile>
            <StyledButton type='button' onClick={addToCart}>Add to cart</StyledButton>

        </StyledProduct >
    )
}

export default Product