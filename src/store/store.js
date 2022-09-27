// PR created by reading https://www.freecodecamp.org/news/how-to-build-a-redux-powered-react-app/

import { createStore } from 'redux';
import { authReducer } from './reducers/authReducer';

const store = createStore(authReducer);

export default store;
