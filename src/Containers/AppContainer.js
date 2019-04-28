import { connect } from 'react-redux';
import App from '../App';
import * as action from '../Actions/actions';
import { bindActionCreators } from 'redux';
import FoodItemReducer from './../Reducers/UpdateFoodItemReducer';

const mapStateToProps = (state) => {
    return {
        groceryList: state.GroceryListReducer.groceryList,
        dishList: state.GroceryListReducer.dish,
        inventoryList: state.FoodItemReducer.currentInventory
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getFoodList: bindActionCreators(action.GetGroceryList, dispatch),
    getInventoryList: bindActionCreators(action.getInventory, dispatch)
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
