import * as actions from '../Actions/actions';
import { combineReducers } from 'redux';
import { filterArrById } from '../Actions/methods'
import seed from '../Constants/seed';

const initState = {
    query: "",
    groceryList: seed.foodList,
    groceryListSelect: {},
    dish: seed.foodList,
    dishItemSelect: {},
    dishNutrition: [],
  }

function GroceryListReducer(state = initState, action) {
    switch(action.type) {
        
        case 'SELECT_GROCERY_ITEM': {
            return {
                ...state,
                groceryListSelect: action.groceryListSelect
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
                dishItemSelect: action.dishItemSelect
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

        case 'ADD_FOOD_ITEM_SUCCESS': {
            let newDish = [...state.dish];
            if(state.groceryListSelect) {
                newDish.push(state.groceryListSelect)
            }
            return {
                ...state,
                dish: newDish
            }
        }

        case 'REMOVE_FOOD_ITEM_SUCCESS': {
            // var currDish = ;
            let newDish = filterArrById([...state.dish], state.dishItemSelect.ndbno)
            return {
                ...state,
                dish: newDish
            }
        }

        case ' REMOVE_FOOD_ITEM_FAILURE': {
            return state;
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