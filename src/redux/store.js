import { applyMiddleware, createStore } from 'redux';
import { todoReducer } from './todos';
import { logger } from 'redux-logger';

const middlewares = [logger];

const store = createStore(
  todoReducer,
  applyMiddleware(...middlewares)
);

export default store;
