import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadPostsAction } from '../actions/post_action';

class PostList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {
        this.props.dispatch(loadPostsAction);
    }
    render() {
        const { list } = this.props.post;
        const posts = list.map((post, index) => {
            return (<li key={index}>{post.title}</li>)
        })
        return (
            <div>
                <ul>{posts}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    }
}


// 通过connect连接组件和redux数据， 传递state数据和dispatch方法
export default connect(mapStateToProps)(PostList);
