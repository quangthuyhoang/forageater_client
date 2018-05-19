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
             
                <FoodListContainer name="Select One"/>
              </div>
              <div className="multiselect-controls col-lg-2 col-sm-12 col-xs-12">
              <button className="rightall btn btn-block" onClick={ () =>{(this.props.groceryListSelect.name) ? this.props.addFoodItem(this.props.groceryListSelect) : ""} }>ADD</button>
              <button className="rightall btn btn-block" onClick={this.props.removeFoodItem}>REMOVE</button>
              <button className="rightall btn btn-block">Make A Dish</button>
              </div>
              
              <div className="col-lg-5 col-sm-12 col-xs-12">
              <FoodListContainer name="Food Items" />
                
              </div>
            </div>
            </div>
        )
    }
}

export default Grocery;