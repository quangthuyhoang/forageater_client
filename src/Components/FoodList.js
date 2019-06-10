import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

const createOptions = (args) => {
    const options = args.map( food => {
        return {
            value: food,
            label: food.name
        }
    });
    return options
}

class FoodSelectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: {}
        }
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(value){
        if(this.props.name === "Select One") {
            this.props.selectGroceryItem(value.value)
        } else {
            this.props.selectDishItem(value)
        }
    }

    render() {
   
        // List all available choices
        const {
            selection
        } = this.state;
        var foods = this.props.dishList;


        if(this.props.name === "Select One") {
            foods = this.props.groceryList
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.name}</div>
                <div className="panel-body">
                    <Select 
                    value={selection}
                    onChange={this.selectItem}
                    options={createOptions(foods)}
                    />
                </div>
            </div>
        )
    }
}

export default FoodSelectionList;