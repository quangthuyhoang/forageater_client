import { connect } from 'react-redux';
import ShowNutrition from '../Components/ShowNutrition';
// import * as action from '../Actions/actions';
// import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        dishNutrition: state.GroceryListReducer.dishNutrition,
        loading: state.GroceryListReducer.loading,
        payload_arrived: state.GroceryListReducer.payload_arrived,
        message: state.GroceryListReducer.message,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // GetNutrition: bindActionCreators(action.GetNutrition, dispatch),
    // removeFoodItem: bindActionCreators(action.removeFoodItem, dispatch)
})

const ShowNutritionContainer = connect(mapStateToProps, mapDispatchToProps)(ShowNutrition);

export default ShowNutritionContainer;