import { connect } from 'react-redux';
import App from '../App';
import * as action from '../Actions/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        groceryList: state.GroceryListReducer.groceryList,
        dishList: state.GroceryListReducer.dish,
        inventoryList: state.FoodItemReducer.currentInventory,
        currentItemId: state.FoodItemReducer.currentItemId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getFoodList: bindActionCreators(action.GetGroceryList, dispatch),
    getInventoryList: bindActionCreators(action.getInventory, dispatch),
    addInventory: bindActionCreators(action.addInventory, dispatch),
    selectInventoryId: bindActionCreators(action.SelectInventoryId, dispatch),
    deleteManyInventory: bindActionCreators(action.deleteManyInventory, dispatch)
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
