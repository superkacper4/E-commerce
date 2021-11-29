import React, { SetStateAction, Dispatch } from 'react'
import { StyledSelect, StyledSortButton, StyledSpan, StyledSort } from './Sort.css'

interface Types {
    setSortDirection: Dispatch<SetStateAction<boolean>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    sortDirection: boolean;
    className?: '';
}

const Sort = ({ className, sortDirection, setSortDirection, setSortBy }: Types) => {
    return (
        <StyledSort className={className}>
            <StyledSpan>Sort By:</StyledSpan>
            <StyledSelect onChange={(e) => setSortBy(e.target.value)}>
                <option value='' defaultValue=''>------</option>
                <option value='price'>Price</option>
                <option value='alpha'>Alphabet </option>
            </StyledSelect>
            <StyledSortButton onClick={() => setSortDirection(!sortDirection)}>{sortDirection ? '▼' : '▲'}</StyledSortButton>
        </StyledSort>

    )
}

export default Sort