import React from 'react';
import { useSelector } from 'react-redux';

const AlreadyApprovedItem = (props) => {

    const approver = useSelector(state => state.persons[props.approver.id]);

    return <div className='approved-item'>
        <img className='approved-icon' src='/image/approved.svg' />
        <span className='name-employee'>{approver.fullName}</span>
        <span className='comments-approved'>Comments: {props.approver.comment}</span>
    </div>;
};

export default AlreadyApprovedItem;