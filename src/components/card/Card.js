/** @format */

import React from 'react';
import styled from 'styled-components/macro';
import Details from './Details';

const Card = ({
    item: { name, brand, imageUrl, price, sizes, actualPrice }
}) => {
    return (
        <>
            <CardContainer>
                <img src={imageUrl} alt={name} />
                <Details details={{ name, brand, price, sizes, actualPrice }} />
            </CardContainer>
        </>
    );
};

export const CardContainer = styled.div`
    /* width: 25%px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        object-fit: cover;
    }
`;

export default Card;
