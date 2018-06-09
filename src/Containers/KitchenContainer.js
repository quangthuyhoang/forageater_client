import { connect } from 'react-redux';
import Kitchen from '../Components/Kitchen';
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
    removeFoodItem: bindActionCreators(action.removeFoodItem, dispatch)
})

const KitchenContainer = connect(mapStateToProps, mapDispatchToProps)(Kitchen);

export default KitchenContainer;