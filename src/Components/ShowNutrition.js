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

    render() {
        var params = Object.keys(this.props.dishNutrition);       
        var NutritionComponentList = params.map( (param, i) => {
            return NutritionComponent(param, this.props.dishNutrition[param], i)
        })

        if(this.props.loading) {
            return (
                <div className="page">
                    <div className="jumbotron">
                        <h1 className="display-3">Show Nutrition Page</h1>
                    </div>
            
                    <div>
                        <h1>Loading...</h1>
                        <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-text">loading</div>
                        </div>
                    </div>
                </div>
            )
        }
    
        if(!this.props.loading && !this.props.payload_arrived) {
            return (
                <div className="page">
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
                <div className="page">
                    <div className="jumbotron">
                        <h1 className="display-3">Show Nutrition Page</h1>
                    </div>
    
                    <div className="nutritionList">
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