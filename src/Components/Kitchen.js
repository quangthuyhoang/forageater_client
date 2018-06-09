import React, { Component } from 'react';
import '../App.css';
import FoodItem from './FoodItem';
import seed from '../Constants/seed';


class Kitchen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let foodList;
        if(this.props.dishList) {
           foodList =  this.props.dishList.map( (item, index) => {
                return <FoodItem key={index} item={item} method={this.props.removeFoodItem} index={index} />
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
            </div>

        )
    }
}

export default Kitchen;