import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/react-page';
import Flutter from './video/flutter';
import Vue from './video/vue';

import './video.css';

export default function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactPage">React Tutorial</Link></li>
                    <li><Link to="/video/flutter">Flutter Tutorial</Link></li>
                    <li><Link to="/video/vue">Vue Tutorial</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>Video Tutorial</h3></div>
                <Route path="/video/reactPage/" component={ReactPage} />
                <Route path="/video/flutter/" component={Flutter} />
                <Route path="/video/vue/" component={Vue} />
            </div>
        </div>
    )
}
