import React, { Component } from 'react';
import seed from './Constants/seed';
// import FoodList from './Components/FoodList';
// import Grocery from './Components/Grocery';
import GroceryContainer from './Containers/GroceryContainer';
import ShowNutrition from './Containers/ShowNutrition';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      groceryList: seed.foodList,
      groceryListSelect: {},
      dish: [],
      dishItemSelect: {},
      dishNutrition: [],
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

  // fetch API data for groceryList
  getFoodList() {

    const ds = "sr";
    fetch(this.props.apiURL + ds + "/" + this.state.query)
    .then(function(response) {
      console.log(response)
      if(response.status !== 200) {
        console.log(response.body)
      }
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(function(data) {
      if(data.errors) {
        this.setState({groceryList: []}, ()=> {
          console.log(data.errors.error[0].message)
        })
      }
      this.setState({groceryList: data.list.item}, ()=> {
        console.log("foodlist has updated:", this.state.groceryList)
      })
    }.bind(this)
  )
    .catch(function(err) {
      console.log(err);
    })
  }

// fetch POST to API data for nutrtion
// dish = [Objs, Objts]
  getNutrition() {
    fetch('url')
    .then(function(response) {
      if(response.status !== 200) {
        console.log(response.body)
      }
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(function(data) {
      console.log(data)
    })
  }

  // get current Select item from food list
  selectGroceryItem(value) {
    
    if(value !== "0") {
      this.setState({groceryListSelect: JSON.parse(value)}, ()=> {
        console.log(this.state.groceryListSelect)
      })
    } else {
      this.setState({groceryListSelect: ""})
    }
  }

  // get current Select item from food list
  selectDishItem(value) {
   
    if(value !== "0") {
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
    return (
      <Router>
      <div className="App">
      {/* Menu Links */}
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/meal">Meal</Link></li>
        </ul>
        <hr/>

      {/*Routes will go here */}
      <Route exact={true} path="/" render={() => {
        return (
          <div className="jumbotron">
            <h1 className="display-3">Home Page</h1>
          </div>
        )
      }} />
      <Route path="/grocery" render={() => {
        return (
          <div>
            <div className="jumbotron">
              <h1 className="display-3">Search for food</h1>
            </div>
            <div className="formBox">
              <label for="male">Food Search: </label>
              <input id="query" onChange={this.inputHandler} placeholder="raw chicken breast"/>
              <button onClick={this.getFoodList} >Search</button>
            </div>
            <GroceryContainer />
          </div>
        )
      }} />
      <Route  path="/meal" component={ShowNutrition} />
      </div>
        
      </div>
      

      </Router>
    );
  }
}

export default App;
