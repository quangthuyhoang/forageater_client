import React, { Component } from 'react';
import PointTarget from 'react-point'
// import FoodList from './FoodList';
import FoodListContainer from '../Containers/FoodListContainer';
import '../App.css';
import './Grocery.css';
import { Link } from 'react-router-dom';


class Grocery extends Component {
    constructor(props){
        super(props);
        this._touchStart = this._touchStart.bind(this);
        this._addfood = this._addfood.bind(this);
    }

    _touchStart(e) {
        // e.preventDefault();
        console.log('e.touch', e.touches[0])
        // alert('touch click', this.props.groceryListSelect.name)
        if(this.props.groceryListSelect.name) {
            alert('add food item', this.props.groceryListSelect);
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

        return (
            <div className="food-selection">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-xs-12">
             
                <FoodListContainer name="Select One"/>
              </div>
              <div className="multiselect-controls col-lg-2 col-sm-12 col-xs-12">
                <PointTarget onPoint={()=> {console.log("touch")}}>
                    <button className="rightall btn btn-block btn-primary" 
                    // onTouchStart={e => this._touchStart(e)}
                    onClick={console.log("click")}
                    // onClick={this._addfood}
                    // onTouchEnd={e => e.preventDefault()}
                    >ADD</button>
                </PointTarget>
              
              <button 
                className="rightall btn btn-block btn-warning" 
                onClick={() => {
                    this.props.removeFoodItem(this.props.dishItemSelect)}}>REMOVE</button>
              </div>
            
              <div className="col-lg-5 col-sm-12 col-xs-12">
              <FoodListContainer name="Food Items" />
              {/* <Link to="/meal" ><button className="rightall btn btn-block btn-success" onClick={()=> {this.props.getNutrition(this.props.dishList)}}>Make A Dish</button></Link> */}
              <Link to="/kitchen"><button className="rightall btn btn-block btn-warning" >Edit Portion</button></Link>
              </div>
            </div>
            </div>
        )
    }
}

export default Grocery;