import React, { Component } from 'react';
import '../App.css';
import measurements from '../Constants/measurements';



class FoodComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            unit: "g",
        }

        this.updateFoodItem = this.updateFoodItem.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(e) {
        this.setState({value: e.target.value}, () => {
            console.log(this.state.value)
        })
    }

    updateUnit(e) {
        this.setState({unit: e.nativeEvent.target.value})
    }
    updateFoodItem(){
        console.log("send ", this.state, 'to find reducer')
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
                <span> <button onClick={()=> {console.log("edit this item", this.props.item.ndbno)}}> EDIT </button> </span>
                <span> <button onClick={()=> {this.props.method(this.props.item)}}> DELETE  </button></span>
                <div className="">
                    <span>name</span><span onClick={()=> {console.log("closed modal", this)}}>X</span>
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