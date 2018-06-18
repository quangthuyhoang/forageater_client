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

  export default initState;