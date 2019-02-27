import React from "react";
import ReactDOM from "react-dom";
import { createStore} from "redux";
import { Provider } from "react-redux";
import Login from './components/Login';
import {Router, Redirect} from 'react-router'
import {Switch,Route} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import appReducers from './reducers/appReducers'
import Home from './components/Home'
import Labels from './components/Labels'
const customHistory = createBrowserHistory();

const store = createStore(appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <BaseLayout>
            <Router history={customHistory}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/app/home" component={Home} />
                    <Route path='/labels' component={Labels} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </Router>
        </BaseLayout>
    </Provider>

     
    , document.getElementById('root'));


