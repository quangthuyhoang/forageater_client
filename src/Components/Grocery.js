import React, { Component } from 'react';
import PointTarget from 'react-point'
// import FoodList from './FoodList';
import FoodListContainer from '../Containers/FoodListContainer';
import '../App.css';
import './Grocery.css';
import { Link } from 'react-router-dom';
import CircularUnderLoad from '../Components/Loader/CircularUnderLoad';


class Grocery extends Component {
    constructor(props){
        super(props);
        this._touchStart = this._touchStart.bind(this);
        this._addfood = this._addfood.bind(this);
    }

    _touchStart(e) {
        e.preventDefault();
        if(this.props.groceryListSelect.name) {
            return this.props.addFoodItem(this.props.groceryListSelect);
        } else {
            return "";
        }
    }

    _addfood = () => {
        if(this.props.groceryListSelect.name) {
           return this.props.addFoodItem(this.props.groceryListSelect);
        }
        return "";
        
    }
    render() {
        const {
            dishItemSelect,
            removeFoodItem,
            loading
        } = this.props;
        return (
            <div className="food-selection">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-xs-12">
             
                <FoodListContainer name="Select One"/>
              </div>
              <div className="multiselect-controls col-lg-2 col-sm-12 col-xs-12">
                <PointTarget onPoint={this._addfood}>
                    <button className="rightall btn btn-block btn-primary" 
                    >ADD</button>
                </PointTarget>
              
              <button 
                className="rightall btn btn-block btn-warning" 
                onClick={() => {
                    removeFoodItem(dishItemSelect)}}>REMOVE</button>
              </div>
            
              <div className="col-lg-5 col-sm-12 col-xs-12">
              <FoodListContainer name="Food Items" />
              {/* <Link to="/meal" ><button className="rightall btn btn-block btn-success" onClick={()=> {this.props.getNutrition(this.props.dishList)}}>Make A Dish</button></Link> */}
              <Link to="/kitchen"><button className="rightall btn btn-block btn-warning" >Edit Portion</button></Link>
              </div>
            </div>
            {
            (loading) ? CircularUnderLoad() : ""
            }
            </div>
        )
    }
}

export default Grocery;