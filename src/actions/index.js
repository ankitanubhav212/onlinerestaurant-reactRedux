import axios from 'axios';

export const fetchRestaurantsSuccess = (restaurants) => {
    return {
        type: 'FETCH_RESTURANTS',
        restaurants
    }
}

export const fetchResturants = (search, sort) => {
    const baseUrl = '/api/restaurants';
    let url = baseUrl;
    if (search && sort) {
        url = baseUrl + '?search=' + search + '&sort=' + sort
    } else if (sort) {
        url = baseUrl + '?sort=' + sort
    } else if (search) {
        url = baseUrl + '?search=' + search
    }
    return dispatch => {
        axios.get(url)
            .then(res => res.data)
            .then(restaurants => dispatch(fetchRestaurantsSuccess(restaurants)));
    }
}


export const sortType = (sort) => {
    return {
        type: 'SORTING',
        sort
    }
}