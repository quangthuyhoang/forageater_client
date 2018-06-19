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
    this.setState({ value: e.target.value }, () => {
      console.log(this.state.value)
    })
  }

  updateUnit(e) {
    this.setState({ unit: e.nativeEvent.target.value })
  }

  updateFormHandler() {
    var css = (this.state.showhideEditForm === 'hidden') ? 'show' : 'hidden';
    this.setState({ showhideEditForm: css });
  }
  updateFoodItem() {
    if (this.state.value.length < 1) {
      this.renderErrorMsg()
    }
    if (this.state.value.length > 0 && typeof Number(this.state.value) === 'number') {
      let newItem = this.props.item;

      newItem.portionSize = {
        value: Number(this.state.value),
        unit: this.state.unit
      }
      this.props.updateFoodItem(this.props.dishList, newItem);
      this.updateFormHandler();
    }

  }

  hightlightCheckMark() {
    if(this.state.value) {
      return 'save-color candify-25 candify-btn margin-top-2'
    }
    return 'candify-25 candify-btn margin-top-2';
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
        <span>
          <i className="material-icons white-color">
            <button className="candify-btn side-btn-left delete-color" onClick={() => { this.props.removeFoodItem(this.props.item) }}>
              delete
            </button>
          </i>
        </span>
        <span >
        <button className={this.hightlightCheckMark()}>
        <i className="material-icons ">check_circle</i>
        </button>
        </span>
        <span > 
          <i className="material-icons">
          <button className="candify-btn side-btn-right edit-color" onClick={this.updateFormHandler}>
           edit
          </button>
          </i>
        </span>
        
        
        <div className={this.state.showhideEditForm}>
          <span className="margin-right" onClick={this.updateFormHandler}>Add portion size</span>
          <input type="number" className="candify candify-left" onChange={this.inputHandler} required/>
          <select className="candify candify-right" onChange={(e) => { this.updateUnit(e) }}>
            {options}
          </select>
          <span> 
            <button className="btn-success margin-left candify-left candify-right "onClick={() => { this.updateFoodItem() }}> 
             SAVE 
            </button> 
          </span>
        </div>
      </li>
    )
  }

}

export default FoodComponent;