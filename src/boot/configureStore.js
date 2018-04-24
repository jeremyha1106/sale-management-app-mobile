import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from '../reducers';

export default function configureStore() {
  const enhancer = compose (
    applyMiddleware(thunk)
  );

  const store = createStore(reducer, enhancer);
  persistStore(store);

  return store;
}
