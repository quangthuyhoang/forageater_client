import React, { Component } from 'react';
import '../App.css';

class ShowNutrition extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Show Nutrition Page</h1>
                </div>
                <p>Need to work with backend API to fetch nutrition to show here</p>
                <div className="nutritionList">
                    <ul className="list-group">
                        <li className="list-group-item">Calories</li>
                        <li className="list-group-item">Protein</li>
                        <li className="list-group-item">Carbs</li>
                        <li className="list-group-item">Fats</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShowNutrition;