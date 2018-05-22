import { connect } from 'react-redux';
import App from '../App';
import * as action from '../Actions/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        // groceryList: state.GroceryListReducer.groceryList,
        // dishList: state.GroceryListReducer.dish,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getFoodList: bindActionCreators(action.GetGroceryList, dispatch)
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
