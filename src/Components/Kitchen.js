import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import FoodItemContainer from '../Containers/FoodItemContainer';



class Kitchen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let foodList;
        if(this.props.dishList) {
           foodList =  this.props.dishList.map( (item, index) => {
                return <FoodItemContainer key={index} item={item} index={index} />
                // return <FoodItem key={index} item={item} method={this.props.removeFoodItem} index={index} />
            })
        }
        
        return (
            <div className="page">
                 <h1 className="display-3 jumbotron">kitchen Page</h1>
                 <div className="nutritionList">
                  <ul className="list-group">
                   {foodList}
                  </ul>
                </div>
                <br />
                <Link to="/meal" >
                    <button className="rightall btn btn-block btn-success" 
                    onClick={()=> {this.props.getNutrition(this.props.dishList)}}>
                        Make A Dish
                    </button>
                </Link>
            </div>

        )
    }
}

export default Kitchen;