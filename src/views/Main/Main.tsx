import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../constans/db'
import { ProductTile, P, Cart } from '../../components'
import { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow, StyledSelect, StyledSortButton, StyledProducts } from './Main.css'

interface ArrTypes {
    name: string;
    category: string;
    price: number;
    currency: string;
    image: {
        src: string;
        alt: string;
    };
    bestseller: boolean;
    featured: boolean;
    details: null | {
        dimmentions: {
            width: number,
            height: number
        },
        size: number,
        description: string,
        recommendations: { src: string; alt: string; }[]
    };

}


const Main = () => {
    const [sortBy, setSortBy] = useState('')
    const [sortDirection, setSortDirection] = useState(false)
    let numOfLinks = (Math.ceil(products.length / 6))
    const { page } = useParams()

    const sortArray = (a: ArrTypes, b: ArrTypes) => {
        if (sortBy === 'price' && !sortDirection) {
            if (a.price >= b.price) return 1
            if (a.price < b.price) return -1
            return 0
        }
        if (sortBy === 'price' && sortDirection) {
            if (a.price >= b.price) return -1
            if (a.price < b.price) return 1
            return 0
        }
        if (sortBy === 'alpha' && !sortDirection) {
            if (a.name >= b.name) return 1
            if (a.name < b.name) return -1
            return 0
        }
        if (sortBy === 'alpha' && sortDirection) {
            if (a.name >= b.name) return -1
            if (a.name < b.name) return 1
            return 0
        }
        return 0;
    }


    return (
        <StyledMain>
            <Cart />
            <P>
                Photographics / <StyledSpan isPage={false}>Premium photos</StyledSpan>
            </P>
            <StyledSpan isPage={false}>Sort By:</StyledSpan><StyledSelect onChange={(e) => setSortBy(e.target.value)}>
                <option value='' selected>-----</option>
                <option value='price'>Price</option>
                <option value='alpha'>Alphabet </option>
            </StyledSelect>

            <StyledSortButton onClick={() => setSortDirection(!sortDirection)}>{sortDirection ? '▼' : '▲'}</StyledSortButton>


            <StyledProducts>
                {products.sort(sortArray).slice(Number(page) * 6, (1 + Number(page)) * 6).map((product, i) => {
                    return <ProductTile key={product.name} {...product} />

                })}
            </StyledProducts>

            <StyledDiv>
                {Number(page) !== 0 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) - 1}`} > {'<'} </StyledArrow> : null}

                {[...Array(numOfLinks)].map((e, i) => (
                    <StyledLink to={`/${i}`} key={i}>
                        <StyledSpan onClick={() => window.scrollTo(0, 0)} isPage={Number(page) === i}>{i + 1}</StyledSpan>
                    </StyledLink>
                ))}

                {Number(page) !== [...Array(numOfLinks)].length - 1 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) + 1}`} > {'>'} </StyledArrow> : null}

            </StyledDiv>

        </StyledMain>
    )
}

export default Main