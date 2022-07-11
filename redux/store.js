import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import productsReducer,{restoreProductsAction} from "../redux/productsDuck.js";
// import quotesReducer from "reduxDucks/quoteDuck";
// import userReducer,{restoreSessionAction} from "reduxDucks/userDuck";

import thunk from "redux-thunk";

/**
 * Reducers
 */

let rootReducer = combineReducers({
   product: productsReducer,
});

/**
 * Devtools
 */

const composeEnhancers = compose;

/**
 * Store
 */

export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  // restoreProductsAction()(store.dispatch)
  return store;
}

// const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

// export default store;