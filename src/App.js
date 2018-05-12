import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      foodList: [],
      currItem: {},
      dish: [],
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.getFoodList = this.getFoodList.bind(this);
    this.updateFoodList = this.updateFoodList.bind(this);
  }
  // set query
  inputHandler(e) {
    e.preventDefault();
    this.setState({query: e.target.value}, ()=> {
      console.log(this.state.query)
    })
  }

  updateFoodList(newFoodArr) {
    this.setState({foodList: newFoodArr}, ()=> {
      console.log("foodLIst updated:", this.state.foodList);
    })
  }

  // fetch API data
  getFoodList() {
    const ds = "sr";
    fetch(this.props.apiURL + ds + "/" + this.state.query)
    .then(function(response) {
      if(!response.status === 200) {
        console.log(response.body)
      }
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(function(data) {
      this.setState({foodList: data.list.item}, ()=> {
        console.log("foodlist has updated:", this.state.foodList)
      })
    }.bind(this)
  )
    .catch(function(err) {
      console.log(err);
    })
  }

  render() {
    var fdList;
    if(this.foodList) {
      console.log("1st")
      fdList = this.state.foodList.map(function(item) {
        return <li>item.name</li>
      })
    } else {
      fdList = [];
    }
    console.log("fd", fdList)
      
    return (
      
      <div className="App">
        <div className="formBox">
          
          <label for="male">Food Search: </label>
          <input id="query" onChange={this.inputHandler} placeholder="raw chicken breast"/>
          <button onClick={this.getFoodList} >Search</button>
        </div>
        
        <div className="foodList">
          <ul>
            {fdList}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
