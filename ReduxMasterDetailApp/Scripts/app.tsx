import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import MasterPage from './components/MasterPage';
import DetailPage from './components/DetailPage';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import thunk = require('redux-thunk');
import * as reducers from './reducers';
import {Router, Route, IndexRoute} from 'react-router';
import history from './history';

const router = (
    <Router history={history}>
        <Route path='/' component={Layout}>
            <IndexRoute component={IndexPage} />
            <Route path='/master' component={MasterPage} />
            <Route path='/detail/:id' component={DetailPage} />
        </Route>
    </Router>
);

const createStoreWithMiddleware = Redux.applyMiddleware(thunk as any)(Redux.createStore);
const store = createStoreWithMiddleware(reducers.rootReducer);
ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('content'));
