
const INITIAL_STATE = {
    restaurants: {
        data : []
    },
    sort: ""
}

export const resturantsReducer = (state = INITIAL_STATE.restaurants, action) => {
    switch(action.type) {
        case 'FETCH_RESTURANTS':
            return {...state,data:action.restaurants}
        default:
            return state;
    }
}

export const sortReducer = (state = INITIAL_STATE.sort, action) => {
    switch(action.type) {
        case 'SORTING':
            return {...state,sort:action.sort}
        default:
            return state;
    }
}
