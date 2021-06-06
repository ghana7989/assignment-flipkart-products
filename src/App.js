/** @format */

import { useState, useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Card from './components/card/Card';
import Filter from './components/filter';
import Spacer from './components/Spacer';
import { ProductsContext } from './context/productsContext';
import { Products } from './Data/Products';
import { getPriceFilter } from './hooks/getPriceFilter';
import generateRandomString from './utils/generateRandomString';

export default function App() {
    const { products } = useContext(ProductsContext);
    console.log('products: ', products);
    const [filterValue, setFilterValue] = useState('Home');
    let data = getPriceFilter(filterValue, products);
    const handleFilterClick = ({ target: { innerText } }) => {
        if (innerText === 'Price- High to Low') {
            setFilterValue('highToLow');
        } else if (innerText === 'Price- Low to High') {
            setFilterValue('lowToHigh');
        } else {
            setFilterValue('Home');
        }
    };
    useEffect(() => {
        console.log({ data });
    });
    return (
        <Container>
            <Spacer height="60px" />
            <Row>
                <Col>
                    <Filter handleFilterClick={handleFilterClick} />
                </Col>
            </Row>
            <Spacer height="60px" />
            <Row>
                {data?.length &&
                    data.map((item) => {
                        const key = generateRandomString();
                        return (
                            <Col xs={3}>
                                <Card key={key} item={item} />
                            </Col>
                        );
                    })}
            </Row>
            <Spacer height="60px" />
        </Container>
    );
}
