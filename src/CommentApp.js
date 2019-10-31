import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: [
                {username: 'Jerry', content: 'Hello'},
                {username: 'Tommy', content: 'Hello'},
                {username: 'Lucy', content: 'Hello'},
            ]
        }
    }

    componentWillMount() {
    }

    handleSubmitComment (comment) {
        console.log(comment)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}
                />
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp