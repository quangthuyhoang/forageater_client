import React, { Component } from 'react';
// import FoodList from './FoodList';
import FoodListContainer from '../Containers/FoodListContainer';
import '../App.css';
import './Grocery.css';
import { Link } from 'react-router-dom';


class Grocery extends Component {

    render() {

        return (
            <div className="food-selection">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-xs-12">
             
                <FoodListContainer name="Select One"/>
              </div>
              <div className="multiselect-controls col-lg-2 col-sm-12 col-xs-12">
              <button className="rightall btn btn-block btn-primary" onClick={ () =>{(this.props.groceryListSelect.name) ? this.props.addFoodItem(this.props.groceryListSelect) : ""} }>ADD</button>
              <button className="rightall btn btn-block btn-warning" onClick={this.props.removeFoodItem}>REMOVE</button>
              
              </div>
            
              <div className="col-lg-5 col-sm-12 col-xs-12">
              <FoodListContainer name="Food Items" />
              <Link to="/meal" ><button className="rightall btn btn-block btn-success" onClick={()=> {this.props.getNutrition(this.props.dishList)}}>Make A Dish</button></Link>
            
              </div>
            </div>
            </div>
        )
    }
}

export default Grocery;