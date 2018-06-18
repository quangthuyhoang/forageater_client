import { connect } from 'react-redux';
import FoodItem from '../Components/FoodItem';
import * as action from '../Actions/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        dishList: state.GroceryListReducer.dish,
        loading: state.GroceryListReducer.loading,
        payload_arrived: state.GroceryListReducer.payload_arrived,
        message: state.GroceryListReducer.message,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeFoodItem: bindActionCreators(action.removeFoodItem, dispatch),
    updateFoodItem: bindActionCreators(action.updateFoodItem, dispatch)
})

const FoodItemContainer = connect(mapStateToProps, mapDispatchToProps)(FoodItem);

export default FoodItemContainer;