import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import store from './store/configStore'

import Root from './containers/Root'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Register from './containers/Register'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Root}>
                <IndexRoute component={Home} />
                <Route path='dash' component={Dashboard} />
                <Route path='login' component={Login} />
                <Route path='register' component={Register} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('application')
)
