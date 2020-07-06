import React from 'react'
import { Route, Link } from 'react-router-dom'
import Money from './workplace/money';
import Getup from './workplace/getup';


export default function Workplace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/money">Money</Link></li>
                    <li><Link to="/workplace/getup">Getup</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>Video Tutorial</h3></div>
                <Route path="/workplace/money/" component={Money} />
                <Route path="/workplace/getup/" component={Getup} />
            </div>
        </div>
    )
}
