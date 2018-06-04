import React, { Component } from 'react';
import '../App.css';
import NutritionComponent from './Nutrition';
import './ShowNutrition.css';

class ShowNutrition extends Component {
    
    constructor(props) {
        super(props);
        this.renderLoading = this.renderLoading.bind(this);
        // this.renderResults = this.renderResults.bind(this)
    
    }

    renderLoading() {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

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

        if(this.props.loading) {
            return (
                <div>
                    <div className="jumbotron">
                        <h1 className="display-3">Show Nutrition Page</h1>
                    </div>
            
                    <div>
                        <h1>Loading...</h1>
                        <div class="frame">
                        <div class="center">
                            <div class="dot-1"></div>
                            <div class="dot-2"></div>
                            <div class="dot-3"></div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        
        if(!this.props.loading && !this.props.payload_arrived) {
            return (
                <div>
                    <div className="jumbotron">
                        <h1 className="display-3">Show Nutrition Page</h1>
                    </div>
            
                    <div>
                        <h1>Error...{this.props.message}</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="jumbotron">
                        <h1 className="display-3">Show Nutrition Page</h1>
                    </div>
    
                    <div className="nutritionList">
                    {/* <div class="frame">
                        <div class="center">
                            <div class="dot-1"></div>
                            <div class="dot-2"></div>
                            <div class="dot-3"></div>
                        </div>
                        </div> */}
                        <ul className="list-group">
                            {NutritionComponentList}
                        </ul>
                    </div>
                </div>
            )
        }

        
        // }
    }
}

export default ShowNutrition;