import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import Video from './pages/video';
import Workplace from './pages/work-place';

import Index from './pages/Index';

function AppRouter() {
    const routeConfig = [
        { path: '/', title: 'Blog home page', exact: true, component: Index },
        { path: '/video/', title: 'Video page', exact: false, component: Video },
        { path: '/workplace/', title: 'Workplace page', exact: false, component: Workplace },
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>Level1</h3>
                    <ul>
                        {
                            routeConfig.map((item, index) => {
                                return (
                                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="rightMain">
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                            )
                        })
                    }
                </div>
            </div>

        </Router>
    )
}

export default AppRouter;