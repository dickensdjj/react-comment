import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange (event) {
        this.setState({content: event.target.value})
    }

    handleSubmit (event) {
        if (this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({username, content});
        }
        this.setState({content: ''})
    }

    _saveUsername (username) {
        localStorage.setItem('username', username)
    }

    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)
    }

    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({username})
        }
    }

    componentWillMount() {
        this._loadUsername()
    }

    componentDidMount() {
        this.textarea.focus();
        console.log('component inputlist did mount.')
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username: </span>
                    <div className='comment-field-input'>
                        <input
                            onBlur={this.handleUsernameBlur.bind(this)}
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Content: </span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>Publish</button>
                </div>
            </div>
        )
    }
}

export default CommentInput