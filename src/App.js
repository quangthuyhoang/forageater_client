import React, { Component } from 'react';
// import seed from './Constants/seed';
import GroceryContainer from './Containers/GroceryContainer';
import ShowNutritionContainer from './Containers/ShowNutritionContainer';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",

    }
   
    this.inputHandler = this.inputHandler.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
    this.getNutrition = this.getNutrition.bind(this);
  }
  // set query
  inputHandler(e) {
    e.preventDefault();
    this.setState({query: e.target.value})
  }

  // // fetch API data for groceryList

  getGroceries() {
    this.props.getFoodList(this.state.query)
  }

// fetch POST to API data for nutrtion
// dish = [Objs, Objts]
  getNutrition() { 
    fetch('http://localhost:3000/api/nutrition', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: '{"hello" : "hi"}',
      

    })
    .then(function(response) {
      if(response.status !== 200) {
        console.log(response, response.body)
        
      }
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(function(data) {
      console.log(data)
    })
  }



  render() {
    return (
      <Router>
      <div className="App">
      {/* Menu Links */}
      <div className="container">
        <ul className="nav justify-content-end">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/grocery">Grocery</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/meal">Meal</Link></li>
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
              <label htmlFor="search">Food Search: </label>
              <input name="search" id="query" onChange={this.inputHandler} placeholder="raw chicken breast"/>
              <button onClick={this.getGroceries} >Search</button>
            
            </div>
            <GroceryContainer />
    
          </div>
        )
      }} />
      <Route  path="/meal" component={ShowNutritionContainer} />
      </div>
        
      </div>
      

      </Router>
    );
  }
}

export default App;
