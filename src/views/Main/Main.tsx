import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import paramsIMG from '../../assets/params.png'
import { ProductTile, P, ParamsPanel } from '../../components'
import { StyledMain, StyledLink, StyledSpan, StyledDiv, StyledArrow, StyledProducts, StyledParamsDiv, StyledImg, StyledSort, StyledProductsFilterDiv } from './Main.css'


interface PriceTypes {
    name: string;
    values: number[];
}

interface CategoriesTypes {
    id: string;
    name: string;
}

interface ProductsTypes {
    id: number;
    name: string;
    categories: CategoriesTypes[];
    image: string;
    pages: number;
    price: number;
    currency: string;
}

const Main = () => {
    const [products, setProducts] = useState<ProductsTypes[]>([])
    const [sortBy, setSortBy] = useState<string>('')
    const [isParamsPanelOpen, setParamsPanelOpen] = useState<boolean>(false)
    const [filterBy, setFilterBy] = useState<string[]>([])
    const [filterByInput, setFilterByInput] = useState<string>('')
    const [priceRange, setPriceRange] = useState<PriceTypes[]>([])
    const [sortDirection, setSortDirection] = useState<boolean>(false)

    const { page } = useParams()

    const sortArray = (a: ProductsTypes, b: ProductsTypes) => {
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

    // const filterArr = (item: ProductsTypes) => {
    //     return !filterBy.length || filterBy.some((category) => {
    //         return category === item.category.name
    //     })
    // }

    const filterArrByInput = (item: ProductsTypes) => {
        return !filterByInput.length || item.name.toLowerCase().includes(filterByInput)
    }

    const priceRangeArr = (item: ProductsTypes) => {
        return !priceRange.length || priceRange.some((price) => {
            return item.price >= price.values[0] && item.price <= price.values[1]
        })
    }


    useEffect(() => {

        fetch('https://reasonapps-gql-api.vercel.app/api/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: `{
                  products {
                    name
                    id
                    image
                    price
                    categories{
                        id
                        name
                    }
                    }
                }`
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success ql:', data.data.products);

                setProducts(data.data.products)

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }, [])


    return (
        <StyledMain>

            <StyledParamsDiv>
                <P>
                    Books / <StyledSpan isPage={false}>Premium books</StyledSpan>
                </P>
                <StyledImg src={paramsIMG} alt="Params" onClick={() => setParamsPanelOpen(true)} />
                <StyledSort setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} />

            </StyledParamsDiv>

            <StyledProductsFilterDiv>

                <ParamsPanel
                    products={products}
                    isParamsPanelOpen={isParamsPanelOpen}
                    setParamsPanelOpen={setParamsPanelOpen}
                    setSortBy={setSortBy}
                    setSortDirection={setSortDirection}
                    sortDirection={sortDirection}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    filterByInput={filterByInput}
                    setFilterByInput={setFilterByInput}
                />
                <StyledProducts>
                    {products?.filter(filterArrByInput).filter(priceRangeArr).sort(sortArray).slice(Number(page) * 6, (1 + Number(page)) * 6).map((product) => {

                        return <ProductTile key={product.id} {...product} />

                    })}
                </StyledProducts>

            </StyledProductsFilterDiv>


            <StyledDiv>
                {Number(page) !== 0 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) - 1}`} > {'<'} </StyledArrow> : null}

                {[...Array(Math.ceil(products?.filter(filterArrByInput).filter(priceRangeArr).length / 6))].map((e, i) => (
                    <StyledLink to={`/${i}`} key={i}>
                        <StyledSpan onClick={() => window.scrollTo(0, 0)} isPage={Number(page) === i}>{i + 1}</StyledSpan>
                    </StyledLink>
                ))}

                {Number(page) !== [...Array(Math.ceil(products?.filter(filterArrByInput).filter(priceRangeArr).length / 6))].length - 1 ? <StyledArrow onClick={() => { window.scrollTo(0, 0) }} to={`/${Number(page) + 1}`} > {'>'} </StyledArrow> : null}

            </StyledDiv>

        </StyledMain >
    )
}

export default Main