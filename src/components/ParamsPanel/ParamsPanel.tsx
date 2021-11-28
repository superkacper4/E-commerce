import React, { SetStateAction, Dispatch } from 'react'
import { StyledParamsPanel, StyledSort, StyledCloseButton, StyledInputDiv } from './ParamsPanel.css'
import { products } from '../../constans/db'
import { P } from '..'

interface Types {
    setSortDirection: Dispatch<SetStateAction<boolean>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    sortDirection: boolean;
    isParamsPanelOpen: boolean;
    setParamsPanelOpen: Dispatch<SetStateAction<boolean>>;
    filterBy: string[];
    setFilterBy: Dispatch<SetStateAction<string[]>>;
    priceRange: number[];
    setPriceRange: Dispatch<SetStateAction<number[]>>;
}

const priceRangeArray = [
    {
        display: 'Lower than 20',
        values: [0, 20]

    },
    {
        display: '20 - 100',
        values: [20, 100]

    },
    {
        display: '100 - 200',
        values: [100, 200]

    },
    {
        display: 'More than 200',
        values: [200, 10000000]

    },
]

const ParamsPanel = ({ sortDirection, setSortDirection, setSortBy, isParamsPanelOpen, setParamsPanelOpen, setFilterBy, filterBy, priceRange, setPriceRange }: Types) => {
    return (
        <StyledParamsPanel isParamsPanelOpen={isParamsPanelOpen}>
            <StyledCloseButton onClick={() => { setParamsPanelOpen(false); console.log(isParamsPanelOpen) }}>x</StyledCloseButton>
            <StyledSort setSortBy={setSortBy} setSortDirection={setSortDirection} sortDirection={sortDirection} />
            <P>Category</P>
            {[...new Set(products.map(product => product.category))].map(category => (
                <StyledInputDiv>
                    <input type='checkbox' value={category} onChange={(e) => { setFilterBy([...filterBy, e.target.value]); console.log(filterBy) }} />
                    <label htmlFor={`${category}`}>{category}</label>
                </StyledInputDiv>
            ))}
            <P>Price range</P>
            {/* {priceRangeArray.map(price => (
                // <StyledInputDiv>
                //     <input type='checkbox' value={price.disp} onChange={(e) => { setPriceRange([...priceRange, e.target.value]); console.log(filterBy) }} />
                //     <label htmlFor={`${price.values}`}>{price.display}</label>
                // </StyledInputDiv>

            ))} */}


        </StyledParamsPanel>
    )
}

export default ParamsPanel