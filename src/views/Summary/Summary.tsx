import React from 'react'
import { useCart } from '../../Context/context'
import { H4, H3, H2 } from '../../components'
import { StyledSummary, StyledProduct, StyledImg, StyledDiv, StyledCloseButton, StyledClearButton, StyledH2, StyledLink } from './Summary.css'



const Summary = () => {
    const { cartContent } = useCart()

    return (
        <StyledSummary>
            <H2>Summary</H2>
            <div>
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
                            <H3>quantity: {product.quantity}</H3>
                        </StyledDiv>
                        <StyledImg src={product.cover_url} />

                    </StyledProduct>)}
            </div>
            <StyledLink to={'/payment'}>Next</StyledLink>
        </StyledSummary>
    )
}

export default Summary