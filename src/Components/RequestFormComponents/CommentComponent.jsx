import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../style/vacation.scss';
import { commentsAction } from '../../store/Comment/actions';

export const CommentComponent = (props) => {

    const [comment, setComment] = useState(isEmpty(props.comment) ? "" : props.comment);
    const dispatch = useDispatch();

    const onTextChange = function (e) {
        setComment(e.target.value);
        dispatch(commentsAction.setComment(e.target.value));
    };

    return (
        <div className='comment-block' >
            <span className='text-like-subtitle'>Comment</span>
            <textarea className='comment-input' value={comment} onChange={onTextChange}></textarea>
        </div>
    )
};

function isEmpty(value) {
    if (value === undefined) {
        return true;
    }
    if (value === null) {
        return true;
    }
    return false;
}


