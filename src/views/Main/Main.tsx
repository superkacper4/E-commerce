import React from 'react'
import { products } from '../../constans/db'
import { ProductTile } from '../../components'

const Main = () => {
    return (
        <div>
            {products.map((product) => <ProductTile {...product} />)}
        </div>
    )
}

export default Main