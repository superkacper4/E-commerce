import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import paramsIMG from '../../assets/params.png'
import { products } from '../../constans/db'
import { ProductTile, P, Cart, FeaturedProduct } from '../../components'
import { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow, StyledSelect, StyledSortButton, StyledProducts, StyledParamsDiv, StyledImg } from './Main.css'

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
    const [sortBy, setSortBy] = useState<string>('')
    const [filterBy, setFilterBy] = useState<string[]>([])
    const [sortDirection, setSortDirection] = useState<boolean>(false)

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

    const moveFeaturedToFront = (a: ArrTypes, b: ArrTypes) => {
        if (a.featured <= b.featured) return 1
        if (a.featured > b.featured) return -1
        return 0

    }

    // const filterArr = (item:ArrTypes) => {
    //     filterBy.includes((xd:string) => {
    //         item.category === xd
    //     })
    // }


    return (
        <StyledMain>
            <Cart />
            <StyledParamsDiv>
                <P>
                    Photographics / <StyledSpan isPage={false}>Premium photos</StyledSpan>
                </P>
                <StyledImg src={paramsIMG} alt="parmas" />
            </StyledParamsDiv>
            <StyledSpan isPage={false}>Sort By:</StyledSpan>
            <StyledSelect onChange={(e) => setSortBy(e.target.value)}>
                <option value='' selected>-----</option>
                <option value='price'>Price</option>
                <option value='alpha'>Alphabet </option>
            </StyledSelect>

            <StyledSelect onChange={(e) => { setFilterBy([...filterBy, e.target.value]); console.log(filterBy) }} multiple>
                {products.map(product => (
                    <option>{product.category}</option>
                ))}

            </StyledSelect>

            <StyledSortButton onClick={() => setSortDirection(!sortDirection)}>{sortDirection ? '▼' : '▲'}</StyledSortButton>


            <StyledProducts>
                {page !== '0' ? products.sort(moveFeaturedToFront).sort(sortArray).slice(Number(page) * 6, (1 + Number(page)) * 6).map((product) => {
                    if (product.featured) return <FeaturedProduct key={product.name} {...product} />
                    else return <ProductTile key={product.name} {...product} />

                }) :
                    products.sort(moveFeaturedToFront).sort(sortArray).slice(Number(page) * 6, (1 + Number(page)) * 7).map((product) => {
                        if (product.featured) return <FeaturedProduct key={product.name} {...product} />
                        else return <ProductTile key={product.name} {...product} />

                    })
                }
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

        </StyledMain >
    )
}

export default Main