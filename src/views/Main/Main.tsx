import React from 'react'
import { products } from '../../constans/db'
import { ProductTile } from '../../components'

const Main = () => {
    return (
        <div>
            {products.map((product) => <ProductTile name={product.name} category={product.category} price={product.price} image={product.image} bestseller={product.bestseller} />)}
        </div>
    )
}

export default Main