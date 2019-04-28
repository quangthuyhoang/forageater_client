import React, {Component} from 'react';


export default class ItemTable extends Component {
  state = {
  };

  handleUpdateInput = (value) => {
  };

  render() {
    return (
      <div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-tablet">
        <table id="datatable" className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody id="maintable">
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
              <td>25</  td>
              <td>$2.90</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}