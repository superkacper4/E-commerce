import React from 'react'
import { useCart } from '../../Context/context'
import { H4, H3, H2 } from '../../components'
import { StyledSummary, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton, StyledH2, StyledLink } from './Summary.css'



const Summary = () => {
    const { cartContent, setCartContent } = useCart()

    const removeProduct = (id: number) => {
        setCartContent(cartContent.filter(product => product.id !== id))
    }

    return (
        <StyledSummary>
            <H2>Summary</H2>
            <div>
                {cartContent.map(product =>
                    <StyledProduct key={product.id}>
                        <StyledDiv>
                            <StyledCloseButton type='button' onClick={() => removeProduct(product.id)} >X</StyledCloseButton>
                            <StyledH2>{product.name}</StyledH2>
                            <H3>{product.price}
                                {(() => {
                                    switch (product.currency) {

                                        case 'EURO': return 'Є'
                                        case "PLN": return 'PLN'

                                        default: return '$'
                                    }
                                })()}
                            </H3>

                        </StyledDiv>
                        <StyledImg src={product.image} />

                    </StyledProduct>)}
            </div>
            <H3>
                Summary: {cartContent.reduce((prev, current) => {
                    return prev + +current.price
                }, 0)} $
            </H3>
            {cartContent.length !== 0 ? <StyledLink to={'/payment'}>Next</StyledLink> : null}

        </StyledSummary>
    )
}

export default Summary