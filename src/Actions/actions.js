import { apiFetchNutritionPost, updateArrById } from './methods';
// const apiURL = "locahost";

const getBaseURL = () => {
 return 'https://forageater-api.herokuapp.com/';
};


const getStandardReferenceDB = (query) => {
    return 'https://forageater-api.herokuapp.com/api/sr/' + query;
};

// function getBrandedDB(query) {
//     return 'https://forageater-api.herokuapp.com/api/bl/' + query;
// };


export function handleInputChange(txt) {
    return {
        type: 'INPUT_CHANGE',
        input: txt
    }
}


// GET Grocery LIST ACTION
const GetGroceryBegins = () => ({
    type: 'GET_GROCERY_BEGINS'
})

function GetGrocerySuccess(item) {
    return {
        type: 'GET_GROCERY_SUCCESS',
        groceryList: item //type array
    }
}

function GetGroceryFailure(ErrorMessage) {
    return {
        type: 'GET_GROCERY_FAILURE',
        message: ErrorMessage
    }
}



export function GetGroceryList(query) {  
    return function(dispatch) {
        dispatch(GetGroceryBegins())
        return fetch(getStandardReferenceDB(query)).then(res => res.json())
        .then(data => {
  
            // On Error
            if(data.errors) {
                dispatch(GetGroceryFailure(data.errors.error[0].message))
            } else {
            // On Success
                dispatch(GetGrocerySuccess(data.list.item))
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch(GetGroceryFailure(err))
        })
    }
  }

  // GROCERY LIST SELECTION ACTIONS
function groceryItemSelect(item) {
    return {
        type: 'SELECT_GROCERY_ITEM',
        groceryListSelect: JSON.parse(item)
    }
}
  
function groceryItemSelectNone() {
    return {
        type: 'SELECT_GROCERY_ITEM_NONE'
    }
}

export function selectGroceryItem(value) {
    // Select None
    if(value === "none") {
    return function(dispatch) {
        dispatch(groceryItemSelectNone())
    }
    }
    // Select any Items on groceryList
    return function(dispatch) {
        dispatch(groceryItemSelect(value))
    }
}

// Dish List Selection Action
export function dishItemSelect(item) {

    return {
        type: "SELECT_DISH_ITEM",
        dishItemSelect: JSON.parse(item)
    }
}

// add current select item to dishList
function addFoodItemSuccess(item) {
    return {
        type: 'ADD_FOOD_ITEM_SUCCESS',
        newItem: item
    }
}

// function addFoodItemFailure() {
//     return {
//         type: 'ADD_FOOD_ITEM_FAILURE'
//     }
// }

export function addFoodItem(item) {
    return function(dispatch) {
        dispatch(addFoodItemSuccess(item))
    }
}

  // remove current select item from dishList
function removeFoodItemSuccess(item) {
    return {
        type: 'REMOVE_FOOD_ITEM_SUCCESS',
        removeItem: item
    }
}

// function removeFoodItemFailure(item) {
//     return {
//         type: 'REMOVE_FOOD_ITEM_FAILURE'
//     }
// }

export function removeFoodItem(item) {
        return function(dispatch) {
            dispatch(removeFoodItemSuccess(item))
        }
}

// UDPATE PORTION SIZE
function updateFoodItemSuccess(updatedFoodList) {
    return {
        type: 'UPDATE_FOOD_ITEM_SUCCESS',
        updateFoodList: updatedFoodList
    }
}

export function updateFoodItem(foodList, updatedItem) {
    return function(dispatch) {
        const updatedFoodList = updateArrById(foodList, updatedItem)
        dispatch(updateFoodItemSuccess(updatedFoodList))
    }
}

// const b = {
//     type
//     ndbno: 12345,
//     value: 12,
    
// }

// GET NUTRITION
function GetNutritionBegins() {
    return {
        type: 'GET_NUTRITION_BEGINS'
    }
}

export function GetNutritionSuccess(item) {
    return {
            type: 'GET_NUTRITION_SUCCESS',
            dishNutrition: item
        }
}

export function GetNutritionFailure(error) {
    return {
            type: 'GET_NUTRITION_FAILURE',
            message: error
        }
}

export function GetNutrition(dish) {
    return function(dispatch) {
        dispatch(GetNutritionBegins())
        return apiFetchNutritionPost(dish).then(res => res.json())
        .then(data => {
            if(data.errors) {
                dispatch(GetNutritionFailure(data.errors))
            } else {
                dispatch(GetNutritionSuccess(data))
            }
        })
        .catch(err => {
            console.log("error", err)
            dispatch(GetGroceryFailure(err))
        })
    }
}


