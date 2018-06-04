import React, { Component } from 'react';
import './SearchForm.css';

const SearchIcon = (props, onClick, onBlur) => {
    return <i className={props} onClick={onClick}></i>
}

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
            return "jumbotron md-hide";
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
        let renderSomething;
        if(this.state.focus || this.props.query || this.props.activeFocus) {
            renderSomething = (
                <div className="searchform">
              
                    <input  name="search" id="query" onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.inputHandler} onKeyUp={(e) => {this.props.getGroceriesOnEnter(e)}} placeholder="raw chicken breast"></input>
                    <button  onClick={(e)=> {this.props.getGroceries(e)}} >Search</button>
                </div>
            )
        } else {
            renderSomething = (
                <div className="searchform">
         
                    {/* {SearchIcon(this.renderSearchIcon(), this.onFocus)} */}
                    <input type="text" name="search" id="query" onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.inputHandler} onKeyUp={(e) => {this.props.getGroceriesOnEnter(e)}} placeholder="raw chicken breast"></input>
                </div>
            )
        }
        return (
            <div>
                <div className={this.updateClass()}>
                    <h3 className="display-5">search for food</h3>
                    {renderSomething}
                </div>
            </div>
        )
    }
}

export default SearchForm;