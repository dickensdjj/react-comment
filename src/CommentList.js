import React, { Component } from 'react'
import Comment from './Comment.js'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        // This part is used to be old comment
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tommy', content: 'Hello'},
        //     {username: 'Lucy', content: 'Hello'}
        // ];

        return (
            <div>{this.props.comments.map((comment, i)=>{
                return (
                   <Comment comment={comment} key={i} />
                )
            })}</div>
        )
    }
}

export default CommentList