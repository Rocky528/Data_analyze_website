import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import App from './app/App';
// import Login from './app/user-pages/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();