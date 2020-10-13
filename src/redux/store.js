import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Logger er en slags middleware.
//Nedenstående kan findes i redux documentation også.

import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;