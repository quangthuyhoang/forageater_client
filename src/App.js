import React, { Component } from 'react';
// import seed from './Constants/seed';
import GroceryContainer from './Containers/GroceryContainer';
import ShowNutritionContainer from './Containers/ShowNutritionContainer';
import SearchForm from './Components/SearchForm';
import KitchenContainer from './Containers/KitchenContainer';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AutoCompletInput from './Components/input/index';
import ItemTable from './Components/inventorytable/index';
import {
  asyncEditInventory
} from './Actions/methods';

// function editItem (obj, key, val) {
//   return obj[key] = val;
// }



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      upc: "",
      showEdit: true,
      currentItem: {
        upc: "",
        quantity: "",
        date: "",
        createdAt: ""
      }
    }
   
    this.inputHandler = this.inputHandler.bind(this);
    this.upcHandler = this.upcHandler.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
    this.getGroceriesOnEnter = this.getGroceriesOnEnter.bind(this);
    this.getInventory = this.getInventory.bind(this);
    this.handleUpdatedCurrentItem = this.handleUpdatedCurrentItem.bind(this);
    this.updateItemInDB = this.updateItemInDB.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }
  // set query
  inputHandler(val) {
    // e.preventDefault();
    this.setState({query: val})
  }

  upcHandler(val) {
    this.props.addInventory(val);
    this.setState({upc: val})
  }

  editItemHandler (key, val) {
    const { currentItem } = this.state;
    console.log(key, val);
    currentItem[key] = val;
    this.setState({ currentItem: currentItem})
  }

  // fetch API data for inventory mlab
  getInventory () {
    this.props.getInventoryList()
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

  handleUpdatedCurrentItem (inventory, id) {
    const { showEdit } = this.state;
    const localInventory = inventory;
    const currentId = id;
    if(showEdit) {
      this.setState({
        currentItem: localInventory[currentId],
        updatedItem: localInventory[currentId]
      }, () => {
        console.log("test",localInventory[currentId])
      })
    }
  }

  updateItemInDB (item) {
    console.log("saved", item._id, 'with qty', item.quantity);
    asyncEditInventory(item._id, item.quantity)
    .then(results => {
      console.log("return edit results", results)
    }) 
  }

  deleteItemHandler = (deleteIndexes) => {
    const { inventoryList, deleteManyInventory } = this.props;
    const deleteIds = inventoryList
    .filter((item, index) => deleteIndexes.indexOf(index) > -1)
    .map(i => i._id);

    deleteManyInventory(deleteIds);
  }

  
  render() {
    const { 
      inventoryList, 
      selectInventoryId
    } = this.props;
    const { showEdit, currentItem } = this.state;

   
    console.log("current item:", currentItem);
    return (
      <Router>
        
      <div className="App">
      {/* Menu Links */}
      
      <ul className="navbar">
        <li className="nav-item "><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item "><Link className="nav-link" to="/grocery">Grocery</Link></li>
        <li className="nav-item "><Link className="nav-link" to="/kitchen">Kitchen</Link></li>
        <li className="nav-item "><Link className="nav-link" to="/meal">Meal</Link></li>
      </ul>


      {/*Routes will go here */}
      <Route exact={true} path="/" render={() => {
        
        return (
          <div className="page">
            <h1 className="display-4 jumbotron">Nutrition Web Application</h1>
            <AutoCompletInput 
              upcHandler={this.upcHandler}
            />
            <button onClick={this.getInventory}>Test</button>
            <button onClick={() => {this.updateItemInDB(currentItem)}}>Save Changes</button>
            { showEdit && currentItem ? 
              <div>
                <input name="upc" type="text"
                value={currentItem.upc}></input>
                <input name="quantity" type="number" onChange={(e) => {
                  this.editItemHandler(e.target.name, e.target.value)}} 
                  value={currentItem.quantity}></input>
              
              </div> :
              ''
            }
            <ItemTable 
            inventoryList={inventoryList} 
            selectInventoryId={selectInventoryId}
            updateCurrentItemFunc={this.handleUpdatedCurrentItem}
            deleteItemsFunc={this.deleteItemHandler}
            />
            {/* <div className="home-page-bg-img">
              <img src={require('./assets/nutrition.jpg')} />
            </div> */}
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

      <Route  path="/kitchen" component={KitchenContainer} />

      <Route  path="/meal" component={ShowNutritionContainer} />
      </div>
      

      </Router>
    );
  }
}

export default App;
