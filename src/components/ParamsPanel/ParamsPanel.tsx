import React, { SetStateAction, Dispatch } from 'react'
import { StyledParamsPanel, StyledSort, StyledCloseButton, StyledInputDiv, StyledP } from './ParamsPanel.css'
import { products } from '../../constans/db'

interface PriceTypes {
    name: string;
    values: number[];
}


interface Types {
    setSortDirection: Dispatch<SetStateAction<boolean>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    sortDirection: boolean;
    isParamsPanelOpen: boolean;
    setParamsPanelOpen: Dispatch<SetStateAction<boolean>>;
    filterBy: string[];
    setFilterBy: Dispatch<SetStateAction<string[]>>;
    priceRange: PriceTypes[];
    setPriceRange: Dispatch<SetStateAction<PriceTypes[]>>;
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

const ParamsPanel = ({ sortDirection, setSortDirection, setSortBy, isParamsPanelOpen, setParamsPanelOpen, setFilterBy, filterBy, priceRange, setPriceRange }: Types) => {
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
                values: [200, 10000000]
            },
        ]

        if (e.target.checked) setPriceRange(ranges.filter(range => range.name === e.target.value))

        else setPriceRange(priceRange.filter(range => range.name !== e.target.value))

        console.log(e.target.value, e.target.checked)
    }

    return (
        <StyledParamsPanel isParamsPanelOpen={isParamsPanelOpen}>
            <StyledCloseButton onClick={() => { setParamsPanelOpen(false); console.log(isParamsPanelOpen) }}>x</StyledCloseButton>
            <StyledSort setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} />

            <StyledP>Category</StyledP>
            {[...new Set(products.map(product => product.category))].map(category => (
                <StyledInputDiv key={category}>
                    <input type='checkbox' value={category} onChange={(e) => setFilter(e)} />
                    <label htmlFor={`${category}`}>{category}</label>
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