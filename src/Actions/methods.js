// const dotenv= require('dotenv');

// dotenv.config();

postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
};

// remove object  arrinay
export function filterArrById(arr, val) {
  return arr.filter(function(el) {
    return el.ndbno !== val;
  })
};

// replace update object in an array

export function updateArrById(arr, obj) {
  let results = arr.map(el => { 
    if(obj['ndbno'] === el.ndbno) {
      return obj;
    }
    return el;
  })

  return results;
}


const createArrayByKey = (key, arr) => {
  if( key === 'ndbno' ) {
    return arr.map( el => {
      return {
        'ndbno': el[key]
      };
    })
  }
  if( key === 'portion' ) {
    return arr.map( el => { 
      return {
        ndbno: el.ndbno,
        value: el.value,
        unit: el.unit
      };
    })
  }
};

export const getDishNDBNoList = (dish) => {
  return createArrayByKey('ndbno', dish) 
};

const getFullDishList = (dish) => {
  return createArrayByKey('portion', dish)
};

const getBaseURL = () => {
  return 'http://localhost:4000/';
  // return 'https://forageater-api.herokuapp.com/';
 };

// Send POST request to API
// [ {"ndbno": "15236"}, {"ndbno": "45253479"}, {"ndbno": "45362799"} ]
export const apiFetchGroceryList = (db, query) => {

  return fetch(getBaseURL() + 'api/' + db + '/' + query, {
    method: 'GET',
    mode: 'cors',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  })
}

export const apiFetchNutritionPost = (arr) => {
  // let b = getDishNDBNoList(arr)
  // let b = getFullDishList(arr);
  
  let url = getBaseURL();
  return fetch( `${url}api/nutrition`, {
  method: 'POST',
  mode: 'cors',
  // protocol:'http:',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(arr)
})
}

