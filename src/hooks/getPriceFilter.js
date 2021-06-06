import { PropTypes } from 'prop-types';

export const getPriceFilter = (type, arrOfItems) => {
    console.log('type: ', type);
    console.log('arrOfItems: ', arrOfItems);
    if (type === 'highToLow') {
        return arrOfItems.sort((item1, item2) => item2.price - item1.price);
    } else if (type === 'lowToHigh') {
        return arrOfItems.sort((item1, item2) => item1.price - item2.price);
    } else {
        return arrOfItems.sort(() => 0.5 - Math.random());
    }
};

getPriceFilter.propTypes = {
    type: PropTypes.oneOf(['highToLow', 'lowToHigh'])
};
