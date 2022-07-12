import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer from './productsDuck';
// import quotesReducer from "reduxDucks/quoteDuck";
// import userReducer,{restoreSessionAction} from "reduxDucks/userDuck";

/**
 * Reducers
 */

const rootReducer = combineReducers({
  product: productsReducer,
});

/**
 * Store
 */

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return store;
}

// const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

// export default store;
