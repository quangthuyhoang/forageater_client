import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

// const foods = [
//     {"offset":91,"group":"Poultry Products","name":"A Chicken, broilers","offset":91,"group":"Poultry Products","name":"Chicken, broilers"},
//     {"offset":92,"group":"Poultry Products","name":"B Chicken, broilers","offset":92,"group":"Poultry Products","name":"Chicken, broilers"},
//     {"offset":93,"group":"Poultry Products","name":"C Chicken, broilers","offset":93,"group":"Poultry Products","name":"Chicken, broilers"},
//     {"offset":94,"group":"Poultry Products","name":"D Chicken, broilers","offset":94,"group":"Poultry Products","name":"Chicken, broilers"}
// ]

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
        this.selectItemTest = this.selectItemTest.bind(this);
    }

    selectItem(e){
        // e.preventDefault();
        let n = this.props.name
        if(this.props.name === "Select One") {
            console.log("val", e.target.val)
            this.props.selectGroceryItem(e.target.value)
        } else {
            this.props.selectDishItem(e.target.value)
        }
        // this.props.selectItem(e.target.value)
    }

    selectItemTest(value){
        // e.preventDefault();
        if(this.props.name === "Select One") {
            this.props.selectGroceryItem(value.value)
            console.log(value.value)
            // this.setState({selection: value})
        } else {
            this.props.selectDishItem(value)
        }
        // this.props.selectItem(e.target.value)
    }

    render() {
   
        // List all available choices
        var options = []
        const {
            selection
        } = this.state;
        var foods = this.props.dishList;
        console.log("foods", foods)
        // const {
        //     foods = []
        // } = this.props.dishList;

       

        // console.log("foods", foods)

        if(this.props.name === "Select One") {
        //     // if(true){
            foods = this.props.groceryList
        //     options.push(
        //         // <PointTarget key={0} value="none" onPoint={()=> {this.selectItemTest("none")}}>
        //         <option 
        //         // onTouchStart={e => this.selectItem(e)}
        //         // onClick={this.selectItemTest}
        //         // onTouchEnd={e => e.preventDefault()}
        //          key={0} value="none" >select none</option>
        //         //  </PointTarget>
        //     )
        }
        
        // if(foods) {
        //     for(let i in foods) {
        //         var val = JSON.stringify(foods[i]);
        //         // console.log("val", val)
        //         options.push(
        //             // <PointTarget key={i + 1} value={val} onPoint={() => {console.log(this)}}>
        //             <option 
        //             // onTouchStart={this.selectItem}
        //             // onClick={this.selectItemTest}
        //             // onTouchEnd={e => e.preventDefault()}
        //             key={i + 1} value={val} >{foods[i].name.toLowerCase()}</option>
        //             // </PointTarget>
        //         )
        //     }
        // }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.name}</div>
                <div className="panel-body">
                    <Select 
                    value={selection}
                    onChange={this.selectItemTest}
                    options={createOptions(foods)}
                    />
                    {/* <select 
                        className="multiselect available form-control" size="5" multiple="multiple"
                        value={selection}
                        onChange={this.selectItemNew}
                    >
                        {options}
                    </select> */}
                </div>
            </div>
        )
    }
}

export default FoodSelectionList;