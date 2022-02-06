import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../Context/context'
import { H3, P } from '../../components'
import { StyledProduct, StyledTile, StyledDiv, StyledImg, StyledH2, StyledButton } from './Product.css'

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

    const { id } = useParams()
    const { cartContent, setCartContent, setCartOpen } = useCart()

    if (!product) return null;

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
                console.log('Success ql:', data.data.products);

                // console.log(data.data.products.find((product: ProductsTypes<string>) => product.id === id))

                setProduct(data.data.products.find((product: ProductsTypes<string>) => product.id === id))

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [])

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
            <StyledTile>
                <StyledH2>
                    {product?.name}
                </StyledH2>

                <StyledDiv>

                    {product?.categories.map(category =>
                        <H3>
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