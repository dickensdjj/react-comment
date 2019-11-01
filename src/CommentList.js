import React, { Component } from 'react'
import Comment from './Comment.js'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static propsType = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    };

    static defaultProps = {
        comments: []
    };

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        // This part is used to be old comment
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tommy', content: 'Hello'},
        //     {username: 'Lucy', content: 'Hello'}
        // ];

        return (

            <div>
                {this.props.comments.map((comment, i)=>{
                    return (
                       <Comment
                           comment={comment}
                           key={i}
                           index={i}
                           onDeleteComment={this.handleDeleteComment.bind(this)}
                       />
                    )
                })}
            </div>
        )
    }
}

export default CommentList