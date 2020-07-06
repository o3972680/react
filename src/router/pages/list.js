import React, { Component } from 'react'

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <h2>List Page: {this.state.id}</h2>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props);
        const tempId = this.props.match.params.id;
        this.setState({
            id: tempId,
        });
    }
}
