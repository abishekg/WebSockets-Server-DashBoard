import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SendReceive from './components/SendReceive';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<div>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={SendReceive} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
