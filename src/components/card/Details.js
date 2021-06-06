/** @format */

import React from 'react';
import styled from 'styled-components/macro';
import generateRandomString from '../../utils/generateRandomString';

const Details = ({ details: { name, brand, sizes, price, actualPrice } }) => {
    return (
        <DetailsContainer>
            <BrandName>{brand}</BrandName>
            <ProductName>{name}</ProductName>
            <PriceContainer>
                <h4>{price} &#8377;</h4>
                <h5>{actualPrice} &#8377;</h5>
            </PriceContainer>
            <div className="sizes">
                <p>Sizes: </p>
                {sizes?.map((size) => {
                    const key = generateRandomString();
                    return <span key={key}>{size + '  '}</span>;
                })}
            </div>
        </DetailsContainer>
    );
};

export const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: aliceblue;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    height: fit-content;
    .sizes {
        width: 80%;
        font-size: 1.3rem;
        text-transform: uppercase;
        p {
            align-self: center;
        }
        display: none;
        transform: translateY(70px);
        transition: translateY 0.3s ease-in-out;
    }

    :hover .sizes {
        display: flex;
        justify-content: space-around;
        transform: translateY(0);
    }
`;
export const BrandName = styled.h2`
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #999;
`;
export const ProductName = styled.h2``;
export const PriceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h5 {
        text-decoration: line-through;
    }
`;

export default Details;
