import { combineReducers } from 'redux';
import { filterArrById } from '../Actions/methods';
import seed from '../Constants/seed';

const initState = {
    query: "",
    groceryList: [],
    groceryListSelect: {},
    dish: seed.foodList,
    dishItemSelect: {},
    dishNutrition: {},
    message: {},
    loading: false,
    payload_arrived: true,
  }

function GroceryListReducer(state = initState, action) {
    switch(action.type) {
        case 'GET_GROCERY_BEGINS' : {
            return {
                ...state,
                loading: true
            }
        }
        case 'GET_GROCERY_SUCCESS': {
            return {
                ...state,
                groceryList: action.groceryList,
                loading: false,
            }
        }

        case 'GET_GROCERY_FAILURE': {
            return {
                ...state,
                message: action.message,
                groceryList: [],
                loading: false,
            }
        }
        
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
            // let newDish = filterArrById([...state.dish], state.dishItemSelect.ndbno)
            let newDish = filterArrById([...state.dish], action.removeItem.ndbno)
            return {
                ...state,
                dish: newDish
            }
        }

        case 'REMOVE_FOOD_ITEM_FAILURE': {
            return state;
        }

        case 'GET_NUTRITION_BEGINS': {
            return {
                ...state,
                loading: true,
                payload_arrived: false,
            }
        }

        case 'GET_NUTRITION_SUCCESS': {
            return {
                ...state,
                dishNutrition: action.dishNutrition,
                loading: false,
                payload_arrived: true,
            }
        }

        case 'GET_NUTRITION_FAILURE' : {
            return {
                ...state,
                dishNutrition: {},
                loading: false,
                payload_arrived: false,
                message: action.message,
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