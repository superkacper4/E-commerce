import React from 'react'
import { H2, H3, P } from '..'
import { useCart } from '../../Context/context'
import { StyledCart, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton } from './Cart.css'

const Cart = () => {
    const { isCartOpen, cartContent, setCartOpen, setCartContent } = useCart()
    const cleanCart = () => {
        console.log('czystki')
    }

    return (
        <StyledCart isCartOpen={isCartOpen}>
            <StyledCloseButton onClick={() => setCartOpen(false)}>X</StyledCloseButton>
            {/* {cartContent === [] ? <P>Koszyk pusty</P> : <P>xd</P>} */}
            {cartContent.map(product => <StyledProduct>
                <StyledDiv>
                    <H2>{product.name}</H2>
                    <H3>
                        {(() => {
                            switch (product.currency) {

                                case 'EURO': return 'Є'
                                case "PLN": return 'PLN'

                                default: return '$'
                            }
                        })()}
                        {product.price}</H3>
                </StyledDiv>
                <StyledImg src={product.image.src} />

            </StyledProduct>)}
            <StyledClearButton onClick={() => setCartContent([])}>Clear</StyledClearButton>
        </StyledCart>
    )
}

export default Cart