import React, {Component} from 'react';
// import AutoComplete from 'material-ui/AutoComplete';


/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompletInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ['1'],
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }
  

  isUpc = (args) => {
    var isUPC = false;
    if (args) {
      if (typeof args === 'string' && args.length === 8 && /^\d+$/.test(args)) {
        isUPC = true;
      }
    }
    return isUPC;
  }

  handleUpdateInput = (e) => {
    if(this.isUpc(e.target.value)) {
      this.props.upcHandler(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input  onInput={this.handleUpdateInput} id="mainInput" className="mdl-textfield__input" type="text" placeholder="Scan UPC code here "/>
          <label className="mdl-textfield__label" htmlFor="mainInput">Scan UPC</label>
        </div>
      </div>
    );
  }
}