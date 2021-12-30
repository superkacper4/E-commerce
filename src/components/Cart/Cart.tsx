import React from 'react'
import { H4, H3 } from '..'
import { useCart } from '../../Context/context'
import { StyledCart, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton, StyledH2, StyledLink } from './Cart.css'

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
                <StyledProduct key={product.id}>
                    <StyledDiv>
                        <StyledH2>{product.title}</StyledH2>
                        <H3>{product.price}
                            {(() => {
                                switch (product.currency) {

                                    case 'EURO': return 'Є'
                                    case "PLN": return 'PLN'

                                    default: return '$'
                                }
                            })()}
                        </H3>
                        <H4>{product.pages} pages</H4>
                    </StyledDiv>
                    <StyledImg src={product.cover_url} />

                </StyledProduct>)}
            <StyledClearButton onClick={cleanCart}>Clear</StyledClearButton>
            <StyledLink to={'/summary'}>Summary</StyledLink>

        </StyledCart>
    )
}

export default Cart