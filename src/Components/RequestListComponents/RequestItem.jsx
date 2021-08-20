import React, { useState } from 'react';
import REQUEST_TYPES from '../../static/data/REQUEST_TYPES';
import { VacationPendingApproval } from "../RequestDetails/Vacation/PendingApproval.jsx";
import { OwnPendingApproval } from "../RequestDetails/OwnLeave/PendingApproval.jsx";
import { SickPendingApproval } from "../RequestDetails/SickLeave/PendingApproval.jsx";
import { VacationChangeRequest } from "../RequestDetails/Vacation/ChangeRequest.jsx";
import { SickChangeRequest } from "../RequestDetails/SickLeave/ChangeRequest.jsx";
import { OwnChangeRequest } from "../RequestDetails/OwnLeave/ChangeRequest.jsx";

export const RequestItem = ({ request }) => {

    const [pendingApproval, setPendingApproval] = useState();
    const [changeWindow, setChangeWindow] = useState();

    const closeDetails = function () {
        setPendingApproval(null);
    };

    const closeChangeWindow = function () {
        setChangeWindow(null);
    }

    const showChangeWindow = () => {
        closeDetails();
        switch (request.type) {
            case REQUEST_TYPES[0].type:
                return setChangeWindow(<VacationChangeRequest closeWindow={closeChangeWindow} request={request} />);
            case REQUEST_TYPES[1].type:
                return setChangeWindow(<SickChangeRequest closeWindow={closeChangeWindow} request={request} />);
            case REQUEST_TYPES[2].type:
                return setChangeWindow(<OwnChangeRequest closeWindow={closeChangeWindow} request={request} />);
            default:
                return;
        }
    }

    const showDetails = () => {
        switch (request.type) {
            case REQUEST_TYPES[0].type:
                return setPendingApproval(<VacationPendingApproval closeDetails={closeDetails} showChangeWindow={showChangeWindow} request={request} />);
            case REQUEST_TYPES[1].type:
                return setPendingApproval(<SickPendingApproval closeDetails={closeDetails} showChangeWindow={showChangeWindow} request={request} />);
            case REQUEST_TYPES[2].type:
                return setPendingApproval(<OwnPendingApproval closeDetails={closeDetails} showChangeWindow={showChangeWindow} request={request} />);
            default:
                return;
        }
    }

    return <div className="list-row" onClick={showDetails}>
        <img className='request-icon' src={request.icon} />
        <span className='name-request'>{request.type}: {request.startDate} - {request.endDate} {(request.type === 'Vacation leave') ? `(${request.dayCount} days)` : null}  </span>
        <span className='date-create'> Created: {request.dateCreate} </span>
        <span className='status-request'>{request.status}</span>
        <img className='icon-arrow' src="/image/Vector.svg" />
        {pendingApproval}
        {changeWindow}
    </div>
}