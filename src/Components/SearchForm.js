import React, { Component } from 'react';
import '../App.css';
import './SearchForm.css';

// progress bar
// class ProgressBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             progress: 0,
//             interval: 5,
//         }
//     }

//     componentDidMount() {
//         this.interval = setInterval( ()=> updateBar(), 100)
//     }
//     componentWillUnmount() {
//         clearInterval(this.interval);
//       }

//     updateBar() {
//         if( progress < 100 ) {
//             this.setState((prevState, props) =>{
//                 progress: prevState.progress + this.state.interval
//             })
//         }
//     }

//     render() {
//         return (
//             <div class="wrapper">
//                 <div id="bar">
//                     <div id="progress"></div>
//                 </div>
//             </div>
//         )
//     }
// }

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
        }
        
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.updateClass = this.updateClass.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.renderSearchIcon = this.renderSearchIcon.bind(this);
    }

      // set query
    inputHandler(e) {
        e.preventDefault();
        this.props.inputHandler(e.target.value)
    }

    onFocus() {
        this.setState({ focus: true })
    }

    onBlur() {
        if(this.props.query || this.props.activeFocus) {
            this.setState({ focus: true })
        }  else {
            this.setState({ focus: false })
        }
    }

    updateClass() {
        if(this.state.focus || this.props.query || this.props.activeFocus) {
            return "md-hide banner-theme";
        } else {
            return "logo-curtain md-show"
        }
    }

    renderSearchIcon() {
        if(this.state.focus || this.props.query || this.props.activeFocus) {
            return;
        } else {
            return "fas fa-search fa-4x"
        }
    }

    render() {
        let searchBox;
        if(this.state.focus || this.props.query || this.props.activeFocus) {
            searchBox = (
                <div className="searchform">
                    <input className="input-style banner-theme" name="search" id="query" onFocus={this.onFocus} 
                    onBlur={this.onBlur} onChange={this.inputHandler} onKeyUp={(e) => {this.props.getGroceriesOnEnter(e)}} 
                    placeholder="raw chicken breast"></input>
                    <button  onClick={(e)=> {this.props.getGroceries(e)}} >Search</button>
                </div>
            )
        } else {
            searchBox = (
                <div className="searchform">
                    <input type="text" name="search" id="query" onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.inputHandler} 
                    onKeyUp={(e) => {this.props.getGroceriesOnEnter(e)}} ></input>
                </div>
            )
        }
        return (
            <div className="searchform">
                <div className={this.updateClass()}>
                    <h3 className="display-5">search for food</h3>
                    {searchBox}
                </div>
            </div>
        )
    }
}

export default SearchForm;