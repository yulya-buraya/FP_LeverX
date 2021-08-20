import React from 'react';

const Person = ({person}) => {
    return <div className='user-confirmed-item'>
        <img className='user-confirmed-icon opacity' src={person.avatarSrc} />
        <span className='name-user-confirmed'>{person.fullName}</span>
    </div>;
}

export default Person;