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

        if(this.props.name === "Select One") {
            this.props.selectGroceryItem(e.target.value)
        } else {
            this.props.selectDishItem(e.target.value)
        }
        // this.props.selectItem(e.target.value)
    }

    render() {
        console.log(this.props.name, this.props.dishList)
        // List all available choices
        var options = [], foods = this.props.dishList;
        if(this.props.name === "Select One") {
            foods = this.props.groceryList
            options.push(
                <option onClick={this.selectItem} key={0} value="none" >select none</option>
            )
        }
        
        if(foods) {
            for(let i in foods) {
                var val = JSON.stringify(foods[i]);
                options.push(
                    <option onClick={this.selectItem} key={i + 1} value={val} >{foods[i].name.toLowerCase()}</option>
                )
            }
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