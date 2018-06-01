
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
import React from 'react';
import ReactDOM from 'react-dom';
import seed from '../Constants/seed';
// import { getDishNDBNoList } from '../Actions/methods';
const getDishNDBNoList = require('../Actions/methods').expectedNDBNoList;


const dishList = seed.foodList;
const expectedNDBNoList = [{"ndbno": "45089879",}, {"ndbno": "45256350"}, {"ndbno": "45237448"}]
const testDishNDBNoList = getDishNDBNoList(dishList)

console.log(testDishNDBNoList)
describe('methods', () => {
    it('should return array of ndbno list', function() {
        expect(testDishNDBNoList).toEqual(expectedNDBNoList)
    })
})
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
