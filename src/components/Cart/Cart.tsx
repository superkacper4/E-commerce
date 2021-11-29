import React from 'react'
import { H2, H3, P } from '..'
import { useCart } from '../../Context/context'
import { StyledCart, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton, StyledH2 } from './Cart.css'

const Cart = () => {
    const { isCartOpen, cartContent, setCartOpen, setCartContent } = useCart()
    const cleanCart = () => {
        setCartContent([])
        setCartOpen(false)
    }

    return (
        <StyledCart isCartOpen={isCartOpen}>
            <StyledCloseButton onClick={() => setCartOpen(false)}>X</StyledCloseButton>
            {/* {cartContent ? <P>Koszyk pusty</P> : <P>xd</P>} */}
            {cartContent.map(product =>
                <StyledProduct key={product.name}>
                    <StyledDiv>
                        <StyledH2>{product.name}</StyledH2>
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
            <StyledClearButton onClick={cleanCart}>Clear</StyledClearButton>
        </StyledCart>
    )
}

export default Cart