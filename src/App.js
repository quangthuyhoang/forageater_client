import React, { Component } from 'react';
// import seed from './Constants/seed';
import GroceryContainer from './Containers/GroceryContainer';
import ShowNutritionContainer from './Containers/ShowNutritionContainer';
import SearchForm from './Components/SearchForm';
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
    this.getGroceriesOnEnter = this.getGroceriesOnEnter.bind(this);

  }
  // set query
  inputHandler(val) {
    // e.preventDefault();
    this.setState({query: val})
  }

  // // fetch API data for groceryList

  getGroceries() {
    this.props.getFoodList(this.state.query)
  }

  getGroceriesOnEnter(e) {
    if(e.keyCode === 13) {
      this.props.getFoodList(this.state.query)
    }
  }

  render() {
    return (
      <Router>
        
      <div className="App">
      {/* Menu Links */}
      
      <ul className="navbar ">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/grocery">Grocery</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/meal">Meal</Link></li>
      </ul>
    
        {/* <hr/> */}

      {/*Routes will go here */}
      <Route exact={true} path="/" render={() => {
        return (
          <div className="page">
            <h1 className="display-3 jumbotron">Home Page</h1>
          </div>
        )
      }} />
      <Route path="/grocery" render={() => {
        return (
          <div className="page">
            <SearchForm className="" inputHandler={this.inputHandler} query={this.state.query} getGroceries={this.getGroceries} getGroceriesOnEnter={this.getGroceriesOnEnter} activeFocus={(this.props.groceryList.length > 0)? true : false}/>        
            <GroceryContainer />
          </div>
        )
      }} />

      {/* <Route  path="/grocery" component={GroceryContainer} /> */}

      <Route  path="/meal" component={ShowNutritionContainer} />
      </div>
      

      </Router>
    );
  }
}

export default App;
