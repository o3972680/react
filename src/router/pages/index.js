import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, title: 'title 1' },
                { cid: 456, title: 'title 2' },
                { cid: 789, title: 'title 3' },
            ]
        }
        // redirect
        this.props.history.push("/home/");
    }

    render() {
        return (
            <>
                <h1>test.com</h1>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (

                            <li key={item.cid}>
                                <Link to={'/list/' + item.cid}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

