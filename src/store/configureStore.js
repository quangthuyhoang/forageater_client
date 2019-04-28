import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// Redux thunk need to be added as middleware to allow 
// async function calls
import thunk from 'redux-thunk';

// import reducers
import NutritionApp from '../Reducers/Reducers';

export function configureStore() {
    return createStore( 
        NutritionApp, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, createLogger())
    )
}