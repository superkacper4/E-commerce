import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../constans/db'
import { ProductTile, P, Cart } from '../../components'
import { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow } from './Main.css'

const Main = () => {
    let numOfLinks = (Math.ceil(products.length / 6))
    const [numOfLinksArr, setNumOfLinksArr] = useState<number[]>([])
    const { page } = useParams()



    return (
        <StyledMain>
            <Cart />
            <P>
                Photographics / <StyledSpan isPage={false}>Premium photos</StyledSpan>
            </P>
            {products.slice(Number(page) * 6, (1 + Number(page)) * 6).map((product, i) => {
                return <ProductTile key={product.name} {...product} />

            })}

            <StyledDiv>
                {Number(page) !== 0 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) - 1}`} > {'<'} </StyledArrow> : null}

                {[...Array(numOfLinks)].map((e, i) => (
                    <StyledLink to={`/${i}`}>
                        <StyledSpan onClick={() => window.scrollTo(0, 0)} isPage={Number(page) === i}>{i + 1}</StyledSpan>
                    </StyledLink>
                ))}

                {Number(page) !== [...Array(numOfLinks)].length - 1 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) + 1}`} > {'>'} </StyledArrow> : null}

            </StyledDiv>

        </StyledMain>
    )
}

export default Main