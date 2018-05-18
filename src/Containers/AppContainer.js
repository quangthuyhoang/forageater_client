import { connect } from 'react-redux';
import App from '../App';
import * as action from '../Actions/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        groceryList: state.GroceryListReducer.groceryList,
        dishList: state.GroceryListReducer.dish,
        test: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectGroceryItem: bindActionCreators(action.selectGroceryItem, dispatch),
    selectDishItem: bindActionCreators(action.dishItemSelect, dispatch)
})

const FoodListContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodListContainer;
