import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            timeString: ''
        }
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(this._updateTimeString.bind(this), 5000)
    }

    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (Date.now() - comment.createdTime) / 1000;
        this.setState(
            {
                timeString: duration > 60
                    ? `${Math.round(duration/60)} minutes before`
                    : `${Math.round(Math.max(duration, 1))} seconds before`
            }
        )
    }

    _getProcessedContent(content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleDeleteComment() {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }


    render() {
        const { comment } = this.props;
        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username}</span>:
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(comment.content)
                }} />
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
            </div>
        )
    }
}

export default Comment