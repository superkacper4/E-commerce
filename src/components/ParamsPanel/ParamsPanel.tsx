import React, { SetStateAction, Dispatch, useEffect, useState } from 'react'
import { Input } from '..'
import { StyledParamsPanel, StyledSort, StyledCloseButton, StyledInputDiv, StyledP } from './ParamsPanel.css'

interface PriceTypes {
    name: string;
    values: number[];
}

interface CategoriesTypes {
    id: string;
    name: string;
}

interface BooksTypes {
    id: string;
    name: string;
    categories: CategoriesTypes[];
    image: string;
    pages: number;
    price: number;
}

interface Types {
    products: BooksTypes[];
    setSortDirection: Dispatch<SetStateAction<boolean>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    sortDirection: boolean;
    isParamsPanelOpen: boolean;
    setParamsPanelOpen: Dispatch<SetStateAction<boolean>>;
    filterBy: string[];
    setFilterBy: Dispatch<SetStateAction<string[]>>;
    priceRange: PriceTypes[];
    setPriceRange: Dispatch<SetStateAction<PriceTypes[]>>;
    filterByInput: string;
    setFilterByInput: Dispatch<SetStateAction<string>>;
}

const priceRangeArray = [
    {
        display: 'Lower than 20',
        value: 'lowest',

    },
    {
        display: '20 - 100',
        value: 'lower',

    },
    {
        display: '100 - 200',
        value: 'higher',


    },
    {
        display: 'More than 200',
        value: 'highest',


    },
]

const ParamsPanel = ({ products, sortDirection, setSortDirection, setSortBy, isParamsPanelOpen, setParamsPanelOpen, setFilterBy, filterBy, priceRange, setPriceRange, filterByInput, setFilterByInput }: Types) => {
    const [categories, setCategories] = useState<CategoriesTypes[]>([])

    const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setFilterBy([...filterBy, e.target.value])

        else setFilterBy(filterBy.filter(category => category !== e.target.value))

        console.log(e.target.value, e.target.checked)
    }

    const setRanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ranges = [
            {
                name: 'lowest',
                values: [0, 20]
            },
            {
                name: 'lower',
                values: [20, 100]
            },
            {
                name: 'higher',
                values: [100, 200]
            },
            {
                name: 'highest',
                values: [200, Number.MAX_VALUE]
            },
        ]

        if (e.target.checked) setPriceRange(ranges.filter(range => range.name === e.target.value))

        else setPriceRange(priceRange.filter(range => range.name !== e.target.value))

        console.log(e.target.value, e.target.checked)
    }

    useEffect(() => {
        fetch('https://reasonapps-gql-api.vercel.app/api/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: `{
                  categories {
                    name
                    id
                    }
                }`
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success ql:', data.data.categories);

                setCategories(data.data.categories)

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <StyledParamsPanel isParamsPanelOpen={isParamsPanelOpen}>
            <StyledCloseButton onClick={() => { setParamsPanelOpen(false); console.log(isParamsPanelOpen) }}>x</StyledCloseButton>
            <StyledSort setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} />

            <StyledP>Title</StyledP>
            <Input type='text' onChange={(e) => setFilterByInput(e.target.value)} value={filterByInput} placeholder='Title' />

            <StyledP>Category</StyledP>
            {categories.map(category => (
                <StyledInputDiv key={category.id}>
                    <input type='checkbox' value={category.name} onChange={(e) => setFilter(e)} />
                    <label htmlFor={`${category.name}`}>{category.name}</label>
                </StyledInputDiv>
            ))}

            <StyledP>Price range</StyledP>
            {priceRangeArray.map(price => (
                <StyledInputDiv key={price.value}>
                    <input type='checkbox' value={price.value} onChange={(e) => setRanges(e)} />
                    <label htmlFor={`${price.value}`}>{price.display}</label>
                </StyledInputDiv>

            ))}


        </StyledParamsPanel>
    )
}

export default ParamsPanel