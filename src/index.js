import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
import './i18n';
import './semantic.min.css'

// Redux-related imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
