import React, { Component } from 'react';
import seed from './Constants/seed';
import FoodList from './Components/FoodList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      groceryList: seed.foodList,
      groceryListSelect: {},
      dish: [],
      dishItemSelect: {},
    }
    this.test = this.test.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.getFoodList = this.getFoodList.bind(this);
    this.updateFoodList = this.updateFoodList.bind(this);
    this.selectGroceryItem = this.selectGroceryItem.bind(this);
    this.selectDishItem = this.selectDishItem.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
    this.removeFoodItem = this.removeFoodItem.bind(this);
  }
  // set query
  inputHandler(e) {
    e.preventDefault();
    this.setState({query: e.target.value}, ()=> {
      console.log(this.state.query)
    })
  }

  updateFoodList(newFoodArr) {
    this.setState({groceryList: newFoodArr}, ()=> {
      console.log("groceryList updated:", this.state.groceryList);
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
      this.setState({groceryList: data.list.item}, ()=> {
        console.log("foodlist has updated:", this.state.groceryList)
      })
    }.bind(this)
  )
    .catch(function(err) {
      console.log(err);
    })
  }
  // get current Select item from food list
  selectGroceryItem(value) {
    
    if(value != "0") {
      this.setState({groceryListSelect: JSON.parse(value)}, ()=> {
        console.log(this.state.groceryListSelect)
      })
    } else {
      this.setState({groceryListSelect: ""})
    }
  }

  // get current Select item from food list
  selectDishItem(value) {
   
    if(value != "0") {
      this.setState({dishItemSelect: JSON.parse(value)}, ()=> {
        console.log(this.state.dishItemSelect)
      })
    } else {
      this.setState({dishItemSelect: ""})
    }
  }

  // add current select item to food items
  addFoodItem() {
    var newdish = this.state.dish;
    newdish.push(this.state.groceryListSelect)
    this.setState({dish: newdish}, () => {
      console.log("currdish", this.state.dish)
    })
  }

  // remove current select item from food items
  removeFoodItem() {

    var currDish = this.state.dish, newDish = [];
    for(let i in currDish) {
      if(currDish[i].offset !== this.state.dishItemSelect.offset) {
        newDish.push(currDish[i]);
      }
    }

   
    this.setState({dish: newDish}, ()=> {
      console.log("new dish:", this.state.dish)
    })
  }

  test(){
    console.log("test")
  }

  render() {
    var fdList;
    
    if(this.state.foodList) {
      fdList = this.state.foodList.map(function(item) {
        return <li>{item.name}</li>
      })
    } else {
      fdList = [];
    }
  
      
    return (
      
      <div className="App">
        <div className="formBox">
          
          <label for="male">Food Search: </label>
          <input id="query" onChange={this.inputHandler} placeholder="raw chicken breast"/>
          <button onClick={this.getFoodList} >Search</button>
        </div>
        <div className="food-selection">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-xs-12">
            <FoodList currSelect={this.state.groceryListSelect} name="Select One" foodList={this.state.groceryList} selectFoodItem={this.selectGroceryItem} test={this.test}/>
          </div>
          <div className="multiselect-controls col-lg-2 col-sm-12 col-xs-12">
          <button className="rightall btn btn-block" onClick={this.addFoodItem}>ADD</button>
          <button className="rightall btn btn-block">ADD ALL</button>
          <button className="rightall btn btn-block" onClick={this.removeFoodItem}>REMOVE</button>
          <button className="rightall btn btn-block">REMOVE ALL</button>
          </div>
          
          <div className="col-lg-5 col-sm-12 col-xs-12">
            <FoodList name="Food Items" foodList={this.state.dish}selectFoodItem={this.selectDishItem} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
