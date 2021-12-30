import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import paramsIMG from '../../assets/params.png'
import { products } from '../../constans/db'
import { ProductTile, P, Cart, ParamsPanel } from '../../components'
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

interface PriceTypes {
    name: string;
    values: number[];
}

interface BooksTypes {
    id: number;
    title: string;
    author: string;
    cover_url: string;
    pages: number;
    price: number;
    currency: string;
}

const Main = () => {
    const [books, setBooks] = useState<BooksTypes[]>([])
    const [sortBy, setSortBy] = useState<string>('')
    const [isParamsPanelOpen, setParamsPanelOpen] = useState<boolean>(false)
    const [filterBy, setFilterBy] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<PriceTypes[]>([])
    const [sortDirection, setSortDirection] = useState<boolean>(false)

    const { page } = useParams()

    const sortArray = (a: BooksTypes, b: BooksTypes) => {
        if (sortBy === '') return 0;
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
            if (a.title >= b.title) return 1
            if (a.title < b.title) return -1
            return 0
        }
        if (sortBy === 'alpha' && sortDirection) {
            if (a.title >= b.title) return -1
            if (a.title < b.title) return 1
            return 0
        }
        return 0;
    }

    const filterArr = (item: BooksTypes) => {
        return !filterBy.length || filterBy.some((author) => {
            return author === item.author
        })
    }

    const priceRangeArr = (item: BooksTypes) => {
        return !priceRange.length || priceRange.some((price) => {
            return item.price >= price.values[0] && item.price <= price.values[1]
        })
    }


    useEffect(() => {
        fetch('http://localhost:3001/api/book', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data.data);
                setBooks(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
                setBooks([error])
            });
    }, [])


    return (
        <StyledMain>
            <Cart />

            <StyledParamsDiv>
                <P>
                    Books / <StyledSpan isPage={false}>Premium books</StyledSpan>
                </P>
                <StyledImg src={paramsIMG} alt="Params" onClick={() => setParamsPanelOpen(true)} />
                <StyledSort setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} />

            </StyledParamsDiv>

            <StyledProductsFilterDiv>
                <ParamsPanel books={books} isParamsPanelOpen={isParamsPanelOpen} setParamsPanelOpen={setParamsPanelOpen} setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} filterBy={filterBy} setFilterBy={setFilterBy} priceRange={priceRange} setPriceRange={setPriceRange} />
                <StyledProducts>
                    {books.filter(priceRangeArr).filter(filterArr).sort(sortArray).slice(Number(page) * 6, (1 + Number(page)) * 6).map((product) => {

                        return <ProductTile key={product.id} {...product} />

                    })}
                </StyledProducts>

            </StyledProductsFilterDiv>


            <StyledDiv>
                {Number(page) !== 0 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) - 1}`} > {'<'} </StyledArrow> : null}

                {[...Array(Math.ceil(books.filter(priceRangeArr).filter(filterArr).length / 6))].map((e, i) => (
                    <StyledLink to={`/${i}`} key={i}>
                        <StyledSpan onClick={() => window.scrollTo(0, 0)} isPage={Number(page) === i}>{i + 1}</StyledSpan>
                    </StyledLink>
                ))}

                {Number(page) !== [...Array(Math.ceil(books.filter(priceRangeArr).filter(filterArr).length / 6))].length - 1 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) + 1}`} > {'>'} </StyledArrow> : null}

            </StyledDiv>

        </StyledMain >
    )
}

export default Main