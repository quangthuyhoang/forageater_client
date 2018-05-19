const apiURL = "locahost"

function getStandardReferenceDB() {
    return fetch('http://localhost:3000/api/sr');
}

function getBrandedDB() {
    return fetch('http://localhost:3000/api/bl')
}


export function handleInputChange(txt) {
    return {
        type: 'INPUT_CHANGE',
        input: txt
    }
}


// GET Grocery LIST ACTION
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
    const apiURL = getStandardReferenceDB() + '/' + query;
    return function(dispatch) {
        apiURL.then(res => res.json())
        .then(data => {
            // On Error
            if(data.errors) {
                dispatch(GetGroceryFailure(data.errors.error[0].message))
            }
            // On Success
            dispatch(GetGrocerySuccess)
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

function addFoodItemFailure() {
    return {
        type: 'ADD_FOOD_ITEM_FAILURE'
    }
}

export function addFoodItem(item) {
    return function(dispatch) {
        dispatch(addFoodItemSuccess(item))
    }
}



// addFoodItem() {
//     var newdish = this.state.dish;
//     newdish.push(this.state.groceryListSelect)
//     this.setState({dish: newdish}, () => {
//       console.log("currdish", this.state.dish)
//     })
//   }

  // remove current select item from dishList
function removeFoodItemSuccess(item) {
    console.log("removefooditem succes", item)
    return {
        type: 'REMOVE_FOOD_ITEM_SUCCESS',
        removeItem: item
    }
}

function removeFoodItemFailure(item) {
    return {
        type: 'REMOVE_FOOD_ITEM_FAILURE'
    }
}

export function removeFoodItem() {
 
        return function(dispatch) {
            dispatch(removeFoodItemSuccess())
        }
    

    // Select None or On Error
    // return function(dispatch) {
    //     dispatch(removeFoodItemFailure())
    // }
}
//   removeFoodItem() {

//     var currDish = this.state.dish, newDish = [];
//     for(let i in currDish) {
//       if(currDish[i].offset !== this.state.dishItemSelect.offset) {
//         newDish.push(currDish[i]);
//       }
//     }

   
//     this.setState({dish: newDish}, ()=> {
//       console.log("new dish:", this.state.dish)
//     })
//   }


export function GetFood(item) {

}

// GET NUTRITION
export function GetNutritionSuccess(item) {
    return {
            type: 'GET_NUTRITION_SUCCESS',
            dishNutrition: item
        }
}

export function GetStockFailure() {
    return {
            type: 'GET_NUTRITION_FAILURE'
        }
}


// export function GetNutrition(item) {
    // if(item.length === 0) {
    //     return function(dispatch) {
    //         dispatch(GetStockFailure())
    //     }
    // }

    // ON ERROR
    // if(info.error) {
    //     return function(dispatch) {
    //         dispatch(GetStockFailure())
    //     }
    // }

    // ON SUCCESS
//     return function(dispatch) {
//         return fetch(apiURL)
//         .then(response => response.json())
//         .then(res => {
//             dispatch(GetStockSuccess(res))
//         })
//     }
// }

// export const test = (symbol) => (dispatch, getState) => {
//     return dispatch(GetStock(symbol))
// }

export function DeleteStockSuccess(id) {
    return {
        type: 'DELETE_STOCK_SUCCESS',
        _id: id
    }
}

// export function DeleteStock(id) {
//     return (dispatch) => {
//         dispatch(DeleteStockSuccess(id))
//     }
// }


// export function UpdateStockType(type) {
//     return (dispatch) => {
//         dispatch(UpdateStockTypeSuccess(type))
//     }
// }

// export function UpdateTime(dataArr) {
//     return (dispatch) => {
//         dispatch(GetTimeSuccess(timeSeries(dataArr)))
//     }
// }