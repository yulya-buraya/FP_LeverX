export const commentActionTypes = {
    SET_COMMENT: 'COMMENT.SET_COMMENT',
}

export const commentsAction = {
    setComment: (comment) => ({
        type: commentActionTypes.SET_COMMENT,
        comment
    })
}