import * as actions from '../Actions/actions';
import { combineReducers } from 'redux';
import seed from '../Constants/seed';

const initState = {
    query: "",
    groceryList: seed.foodList,
    groceryListSelect: {},
    dish: [],
    dishItemSelect: {},
    dishNutrition: [],
  }

function GroceryListReducer(state = initState, action) {
    switch(action.type) {
        
        case 'SELECT_GROCERY_ITEM': {
            return {
                ...state,
                groceryListSelect: JSON.parse(action.groceryListSelect)
            }
        }

        case 'SELECT_GROCERY_ITEM_NONE': {
            return {
                ...state,
                groceryListSelect: {}
            }
        }

        case 'SELECT_DISH_ITEM': {
            return {
                ...state,
                dishListSelect: action.dishItemSelect
            }
        }

        case 'GET_GROCERY_SUCCESS': {
            return {
                ...state,
                groceryList: action.groceryList
            }
        }

        case 'GET_GROCERY_FAILURE': {
            return {
                ...state,
                groceryList: [],
                errorMessage: action.message
            }
        }

        default: {
            return state;
        }

    }
}

const NutritionApp = combineReducers({
    GroceryListReducer
})

export default NutritionApp;