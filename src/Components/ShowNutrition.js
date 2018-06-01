import React, { Component } from 'react';
import '../App.css';
import NutritionComponent from './Nutrition';

class ShowNutrition extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.renderLoading = this.renderLoading.bind(this);
    //     this.renderResults = this.renderResults.bind(this)
    
    // }

    // renderLoading() {
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     )
    // }

    // renderError() {
    //     return (
    //         <div>
    //             <h1>Error...</h1>
    //         </div>
    //     )
    // }

    // renderResults() {
    //     console.log("test")
    //     let params = Object.keys(seed3);
    //     let NutritionComponentList = params.forEach(param => {
    //         return NutritionComponent(param, this.props.dishNutrition[param])
    //     })

    //     return (
    //         <div>
    //             <div className="jumbotron">
    //                 <h1 className="display-3">Show Nutrition Page</h1>
    //             </div>
    //             <p>Need to work with backend API to fetch nutrition to show here</p>
    //             <div className="nutritionList">
    //                 <ul className="list-group">
    //                     {NutritionComponentList}
    //                 </ul>
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        var params = Object.keys(this.props.dishNutrition);       
        var NutritionComponentList = params.map( (param, i) => {
            return NutritionComponent(param, this.props.dishNutrition[param], i)
        })

        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Show Nutrition Page</h1>
                </div>
                <p>Need to work with backend API to fetch nutrition to show here</p>
                <div className="nutritionList">
                    <ul className="list-group">
                        {NutritionComponentList}
                    </ul>
                </div>
            </div>
        )
        // }
    }
}

export default ShowNutrition;