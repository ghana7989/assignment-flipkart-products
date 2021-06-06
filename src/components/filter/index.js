/** @format */

import React from 'react';
import { createRef } from 'react';
import styled from 'styled-components/macro';

export default function Filter({ handleFilterClick }) {
    return (
        <FilterContainer>
            <ul onClick={(e) => handleFilterClick(e)}>
                <li>Home</li>
                <li>Price- High to Low</li>
                <li>Price- Low to High</li>
            </ul>
        </FilterContainer>
    );
}

export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    ul {
        width: 70%;
        color: white;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 10px;
    }
    li {
        cursor: pointer;
    }
`;
