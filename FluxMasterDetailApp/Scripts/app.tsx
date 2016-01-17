import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import IndexPage from './components/IndexPage';
import Layout from './components/Layout';
import MasterPage from './components/MasterPage';
import history from './history';

var router = (
    <Router history={history}>
        <Route path='/' component={Layout}>
            <IndexRoute component={IndexPage} />
            <Route path='/master' component={MasterPage} />
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('content'));
