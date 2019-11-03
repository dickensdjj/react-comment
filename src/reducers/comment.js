// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// Action Creator
export const initComments = (comments) => {
    return { type: INIT_COMMENTS, comments}
};

export const addComment = (comment) => {
    return {type: ADD_COMMENT, comment}
};

export const deleteComment = (commentIndex) => {
    return {type: DELETE_COMMENT, commentIndex}
};

// Reducer
// Only change the state or init the state (Not containing any DOM manipulation)
export default function (state, action) {
    if (!state) {
        return {comments: []}
    }
    switch (action.type) {
        case INIT_COMMENTS:
            // Init comments
            return { comments: action.comments };
        case ADD_COMMENT:
            // Add Comment
            // copy a new array and append with action.comment at the end of the array
            return {comments: [
                    ...state.comments, action.comment
            ]};
        case DELETE_COMMENT:
            // Delete Comment
            return {comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
            ]};
        default:
            return state
    }
}
