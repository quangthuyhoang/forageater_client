import { combineReducers } from 'redux';
import { filterArrById } from '../Actions/methods';
import initState from './initState';
import { findWhere } from 'underscore';
// import UpdateFoodItemReducer from './UpdateFoodItemReducer';



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
                loading: false
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

const initInventoryState = {
    upc: "",
    loading: false,
    currentItemId: "",
    inventoryIdList: [],
    currentInventory: []
}

function FoodItemReducer(state = initInventoryState, action) {
    switch(action.type) {
        case 'SELECT_ID': {
            return {
                ...state,
                currentItemId: action.payload
            }
        }
        case 'GET_INVENTORY_BEGINS': {
            return {
                ...state,
                loading: true
            }
        }

        case 'GET_INVENTORY_SUCCESS': {
            return {
                ...state,
                loading: false,
                currentInventory: action.payload
            }
        }

        case 'GET_INVENTORY_FAILURE': {
            return {
                ...state,
                loading: false,
                message: {
                    error: "Failure to get inventory from server"
                }
            }
        }

        case 'ADD_INVENTORY': {
            return {
                ...state,
                loading: true
            }
        }

        case 'ADD_INVENTORY_SUCCESS': {
            const item = action.payload;
            const { currentInventory } = state;
            const matchedItem = findWhere(currentInventory, {upc: item.upc});
            let newInventory = [];

            if (matchedItem) {
                newInventory = currentInventory.map(i => {
                    if(i.upc === item.upc) {
                        i.quantity = item.quantity;
                    }
                    return i;
                })
            } else {
                newInventory = [...currentInventory, item];
            }

            return {
                ...state,
                loading: false,
                currentInventory: newInventory
            }
        }

        case 'ADD_INVENTORY_FAILURE': {
            return {
                ...state,
                loading: false,
                message: {
                    error: "Failure to get inventory from server"
                }
            }
        }

        case 'EDIT_INVENTORY': {
            return {
                ...state,
                loading: true
            }
        }

        case 'EDIT_INVENTORY_SUCCESS': {
            const item = action.payload;
            const { currentInventory } = state;
            const matchedItem = findWhere(currentInventory, {upc: item.upc});
            let newInventory = [];

            if (matchedItem) {
                newInventory = currentInventory.map(i => {
                    if(i.upc === item.upc) {
                        return item;
                    }
                    return i;
                })
            } else {
                newInventory = [...currentInventory, item];
            }

            return {
                ...state,
                loading: false,
                currentInventory: newInventory
            }
        }

        case 'EDIT_INVENTORY_FAILURE': {
            return {
                ...state,
                loading: false,
                message: {
                    error: "Failure to get inventory from server"
                }
            }
        }

        case 'DELETE_INVENTORY_SUCCESS': {
        
            const { deletedIds } = action.payload;
            const { currentInventory } = state;

            const newInventory = currentInventory.filter(item => { 
                if(deletedIds.indexOf(item._id) == -1) {
                    return item;
                }
            });

            return {
                ...state,
                loading: false,
                currentInventory: newInventory
            }
        }

        case 'DELETE_INVENTORY_FAILURE': {
            return {
                ...state,
                loading: false,
                message: {
                    error: "Failure to delete inventory from server"
                }
            }
        }

        default: {
            return state;
        }
    }
}

// const FoodItemReducer = UpdateFoodItemReducer(initState, action)

const NutritionApp = combineReducers({
    GroceryListReducer,
    FoodItemReducer
})

export default NutritionApp;