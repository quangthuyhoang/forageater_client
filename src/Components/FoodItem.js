import React, { Component } from 'react';
import '../App.css';
import './FoodItem.css';
import measurements from '../Constants/measurements';



class FoodComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            unit: "g",
            showhideEditForm: 'hidden'
        }

        this.updateFoodItem = this.updateFoodItem.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.updateFormHandler = this.updateFormHandler.bind(this);
    }

    inputHandler(e) {
        this.setState({value: e.target.value}, () => {
            console.log(this.state.value)
        })
    }

    updateUnit(e) {
        this.setState({unit: e.nativeEvent.target.value})
    }

    updateFormHandler() {
        var css = (this.state.showhideEditForm === 'hidden') ? 'show':'hidden';
        this.setState({showhideEditForm: css});
    }
    updateFoodItem(){
        if(this.state.value.length < 1) {
            this.renderErrorMsg()
        }
        if(this.state.value.length > 0 && typeof Number(this.state.value) === 'number') {
            let newItem = this.props.item;

            newItem.portionSize = {
                value: Number(this.state.value),
                unit: this.state.unit
            }
            this.props.updateFoodItem(this.props.dishList, newItem);
            this.updateFormHandler();
        }
        
    }

    renderErrorMsg() {
        // pop messsage
        console.log("need to enter number")
    }
    
    render() {

 
        let measurementList = Object.values(measurements.metric);
        let options = measurementList.map((measurement_type, i) => {
            return <option key={i}>{measurement_type}</option>
        })
      
        return (
            <li key={this.props.index} className="list-group-item list-group-item-action flex-column align-items-start soft-glow soft-glow-shadow bottom-spacing">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.item.name.toLowerCase()}</h5>
                </div>
                <span> <button onClick={this.updateFormHandler}> EDIT </button> </span>
                <span> <button onClick={()=> {this.props.removeFoodItem(this.props.item)}}> DELETE  </button></span>
                <div className={this.state.showhideEditForm}>
                    <span>name</span><span onClick={this.updateFormHandler}>X</span>
                    <input type="number"  onChange={this.inputHandler} />
                    <select onChange={(e)=> {this.updateUnit(e)}}>
                        {options}
                    </select>
                    <span> <button onClick={()=> {this.updateFoodItem()}}> UPDATE </button> </span>
                </div>
            </li>
        )
    }
    
}

export default FoodComponent;