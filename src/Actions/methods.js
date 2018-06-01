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
}

export function filterArrById(arr, val) {
  return arr.filter(function(el) {
    return el.ndbno !== val;
  })
}


const createArrayByKey = (key, arr) => {
  return arr.map( el => {return { 'ndbno': el[key] }; })
}

export const getDishNDBNoList = (dish) => {
  return createArrayByKey('ndbno', dish) 
} 



// Send POST request to API
// [ {"ndbno": "15236"}, {"ndbno": "45253479"}, {"ndbno": "45362799"} ]

export const apiFetchNutritionPost = (arr) => {
  let b = getDishNDBNoList(arr)

  return fetch('http://localhost:3000/api/nutrition', {
  method: 'POST',
  mode: 'cors',
  // protocol:'http:',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(b)
})
}

