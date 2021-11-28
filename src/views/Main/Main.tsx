import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import paramsIMG from '../../assets/params.png'
import { products } from '../../constans/db'
import { ProductTile, P, Cart, FeaturedProduct, ParamsPanel } from '../../components'
import { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow, StyledProducts, StyledParamsDiv, StyledImg, StyledSort, StyledProductsFilterDiv } from './Main.css'

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
    const [isParamsPanelOpen, setParamsPanelOpen] = useState<boolean>(false)
    const [filterBy, setFilterBy] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<number[]>([])
    const [sortDirection, setSortDirection] = useState<boolean>(false)

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

    const filterArr = (item: ArrTypes) => {
        return !filterBy.length || filterBy.some((category) => {
            return category === item.category
        })
    }

    const priceRangeArr = (item: ArrTypes) => {
        return !priceRange.length || priceRange.some((price) => {
            return price === item.price
        })
    }




    return (
        <StyledMain>
            <Cart />

            {products.map((product) => {
                if (product.featured) return <FeaturedProduct key={product.name} {...product} />
                else return null
            })}

            <StyledParamsDiv>
                <P>
                    Photographics / <StyledSpan isPage={false}>Premium photos</StyledSpan>
                </P>
                <StyledImg src={paramsIMG} alt="Params" onClick={() => setParamsPanelOpen(true)} />
                <StyledSort setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} />

            </StyledParamsDiv>

            <StyledProductsFilterDiv>
                <ParamsPanel isParamsPanelOpen={isParamsPanelOpen} setParamsPanelOpen={setParamsPanelOpen} setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} filterBy={filterBy} setFilterBy={setFilterBy} priceRange={priceRange} setPriceRange={setPriceRange} />
                <StyledProducts>
                    {products.filter(priceRangeArr).filter(filterArr).sort(sortArray).sort(moveFeaturedToFront).slice(Number(page) * 6, (1 + Number(page)) * 6).map((product) => {
                        if (product.featured) return null
                        else return <ProductTile key={product.name} {...product} />

                    })}
                </StyledProducts>

            </StyledProductsFilterDiv>


            <StyledDiv>
                {Number(page) !== 0 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) - 1}`} > {'<'} </StyledArrow> : null}

                {[...Array(Math.ceil(products.filter(priceRangeArr).filter(filterArr).length / 6))].map((e, i) => (
                    <StyledLink to={`/${i}`} key={i}>
                        <StyledSpan onClick={() => window.scrollTo(0, 0)} isPage={Number(page) === i}>{i + 1}</StyledSpan>
                    </StyledLink>
                ))}

                {Number(page) !== [...Array(Math.ceil(products.filter(priceRangeArr).filter(filterArr).length / 6))].length - 1 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) + 1}`} > {'>'} </StyledArrow> : null}

            </StyledDiv>

        </StyledMain >
    )
}

export default Main