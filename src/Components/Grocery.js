import React, { Component } from 'react';
import FoodList from './FoodList';
import FoodListContainer from '../Containers/FoodListContainer';
import '../App.css';


class Grocery extends Component {
    render() {

        return (
            <div className="food-selection">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-xs-12">
                {/* <FoodList currSelect={this.props.groceryListSelect} name="Select One" foodList={this.props.groceryList} selectFoodItem={this.props.selectGroceryItem} /> */}
                <FoodListContainer name="Select One"/>
              </div>
              <div className="multiselect-controls col-lg-2 col-sm-12 col-xs-12">
              <button className="rightall btn btn-block" onClick={this.props.addFoodItem}>ADD</button>
              <button className="rightall btn btn-block" onClick={this.props.removeFoodItem}>REMOVE</button>
              <button className="rightall btn btn-block">Make A Dish</button>
              </div>
              
              <div className="col-lg-5 col-sm-12 col-xs-12">
                <FoodList name="Food Items" foodList={this.props.dish}selectFoodItem={this.props.selectDishItem} />
              </div>
            </div>
            </div>
        )
    }
}

export default Grocery;