import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index';
import List from './pages/list';
import Home from './pages/home';

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list/">List</Link></li>
            </ul>
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/:id" exact component={List}></Route>
            <Route path="/home/" exact component={Home}></Route>
        </Router>
    )
}

export default AppRouter;