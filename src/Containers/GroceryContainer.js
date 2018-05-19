import { connect } from 'react-redux';
import Grocery from '../Components/Grocery';
import * as action from '../Actions/actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
    return {
        groceryListSelect: state.GroceryListReducer.groceryListSelect,
        dishItemSelect: state.GroceryListReducer.dishItemSelect,
        groceryList: state.GroceryListReducer.groceryList,
        dishList: state.GroceryListReducer.dish,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addFoodItem: bindActionCreators(action.addFoodItem, dispatch),
    removeFoodItem: bindActionCreators(action.removeFoodItem, dispatch),
    test: () => { console.log("test")}
})

const GroceryContainer = connect(mapStateToProps, mapDispatchToProps)(Grocery);

export default GroceryContainer;
