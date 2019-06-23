import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import EnhancedTableHead from './../EnhancedTableToolbar/EnhancedTableToolbar';

// Mock Data

const mockData = [
  {name: "apple", createdAt: "2019-03-28T00:04:44.149Z", date: "May 15, 2018", quantity: 1, upc: "00000000", updatedAt: "2019-03-28T00:04:44.149Z", _id: "1c9c0f9cc54b32021439b57b"},
  {name: "orange", createdAt: "2019-03-28T00:04:44.149Z", date: "May 15, 2018", quantity: 5, upc: "00000001", updatedAt: "2019-03-28T00:04:44.149Z", _id: "2c9c0f9cc54b32021439b57b"},
  {name: "pear", createdAt: "2019-03-28T00:04:44.149Z", date: "May 15, 2018", quantity: 50, upc: "00000002", updatedAt: "2019-03-28T00:04:44.149Z", _id: "3c9c0f9cc54b32021439b57b"},
  {name: "banana", createdAt: "2019-03-28T00:04:44.149Z", date: "May 15, 2018", quantity: 50, upc: "00000003", updatedAt: "2019-03-28T00:04:44.149Z", _id: "4c9c0f9cc54b32021439b57b"},
  {name: "pineapple", createdAt: "2019-03-28T00:04:44.149Z", date: "May 15, 2018", quantity: 50, upc: "00000004", updatedAt: "2019-03-28T00:04:44.149Z", _id: "5c9c0f9cc54b32021439b57b"},
  {name: "apple-pen", createdAt: "2019-03-28T00:04:44.149Z", date: "May 15, 2018", quantity: 50, upc: "00000005", updatedAt: "2019-03-28T00:04:44.149Z", _id: "6c9c0f9cc54b32021439b57b"}
]

let counter = 0;

function createData(id, upc, quantity, date, createdAt) {
  counter += 1;
  return { id: id, upc, quantity, date, createdAt };
}

const createNewData = (id, upc, name, quantity, date, createdAt) => {
  counter += 1;
  return { id, upc, name, quantity, date, createdAt };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}


const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes, handleDeleteItem } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" onClick={()=>{handleDeleteItem()}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'date',
    selected: [],
    data: []
      // createData('Cupcake', 3, 305, 3.7, 67, 4.3),
      // createData('Donut', 1, 452, 25.0, 51, 4.9),
      // createData('Eclair', 1, 262, 16.0, 24, 6.0),
      // createData('Frozen yoghurt', 2, 159, 6.0, 24, 4.0),
      // createData('Gingerbread', 3, 356, 16.0, 49, 3.9),
      // createData('Honeycomb', 1, 408, 3.2, 87, 6.5),
      // createData('Ice cream sandwich', 3, 237, 9.0, 37, 4.3),
      // createData('Jelly Bean', 4, 375, 0.0, 94, 0.0),
      // createData('KitKat', 3, 518, 26.0, 65, 7.0),
      // createData('Lollipop', 2, 392, 0.2, 98, 0.0),
      // createData('Marshmallow', 3, 318, 0, 81, 2.0),
      // createData('Nougat', 4, 360, 19.0, 9, 37.0),
      // createData('Oreo', 3, 437, 18.0, 63, 4.0),
      // this.props.inventoryList
    ,
    page: 0,
    rowsPerPage: 5,
  };

  componentWillReceiveProps(nextProps){
    console.log("next props", nextProps)
  }

  onNewInventoryHandler = (inventoryList) => {
    if (inventoryList.length < 1) {
      return;
    }
    const updatedInventory = inventoryList.map(item => {
      return createData(item.upc, item.quantity, item.date, item.createdAt)
    });
    return updatedInventory;
    // this.setState({ data: updatedInventory })
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    const { data } = this.state;
    console.log(data)
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    console.log("selected", selected, id)
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleSelectId = id => this.props.selectInventoryId(id);

  handleDeleteItem = () => {
    const { selected } = this.state;
    this.props.deleteItemsFunc(selected);
  }

  render() {
    const { classes, inventoryList } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    let mockInventoryList = mockData;

    const updatedInventory = mockInventoryList.map( (item, i ) => {
      return createNewData(i, item.upc, item.name, item.quantity, item.date, item.createdAt)
    });

  
    return (
  
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} handleDeleteItem={this.handleDeleteItem}/>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(updatedInventory, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
         
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      {/* <TableCell component="th" scope="row" padding="none">
                        {n.name}
                      </TableCell> */}
                      <TableCell align="left">{n.name}</TableCell>
                      <TableCell align="left">{n.quantity}</TableCell>
                      {/* <TableCell align="right">{n.date}</TableCell> */}
                      {/* <TableCell align="right">{n.createdAt}</TableCell> */}
                      <span><button onClick={() => {
                        this.handleSelectId(n.id)
                        this.props.updateCurrentItemFunc(inventoryList, n.id)
                      }}>Edit</button></span>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
 
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);