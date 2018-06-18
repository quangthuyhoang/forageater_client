import initState from './initState';

function FoodItemReducer(state = initState, action) {
    switch(action.type) {
        case 'GET_NUTRITION_FAILURE': {
            return {
                ...state,
                dish: action.updateFoodList
            }
        }
        default: {
            return state;
        }
    }
}

export default FoodItemReducer;