import React, { Component } from 'react';
import '../App.css';

class FoodSelectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: "",
        }

        this.selectItem = this.selectItem.bind(this)
    }

    selectItem(e){

        e.preventDefault();
        this.props.selectFoodItem(e.target.value)
    }

    render() {
        // List all available choices
        var options = [], foods = this.props.foodList;
        if(this.props.name === "Select One") {
            options.push(
                <option onClick={this.selectItem} key={0} value="" >select none</option>
            )
        }
        
        if(foods) {
            for(let i in foods) {
                var val = JSON.stringify(foods[i]);
                
                options.push(
                    <option onClick={this.selectItem} key={i + 1} value={val} >{foods[i].name}</option>
                )
            }
            
            // options = this.props.foodList.map(function(item, i) {
            //     return <option onClick={this.selectItem} key={i} value={item.ndbno} >{item.name}</option>
            // })
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.name}</div>
                <div className="panel-body">
                    <select className="multiselect available form-control" size="5" multiple="multiple">
                        {options}
                    </select>
                </div>
            </div>
        )
    }
}

export default FoodSelectionList;