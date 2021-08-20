import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAction } from '../../../store/Request/actions';
import { availableDaysAction } from '../../../store/AvailableDays/actions';
import '../../../style/forms.scss';
import Person from '../Person';
import AlreadyApprovedItem from '../AlreadyApprovedItem';

export const VacationPendingApproval = ({ closeDetails, showChangeWindow, request }) => {

  const { persons } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(request);

  const cancelRequest = function () {
    const year = new Date(request.dateCreate).getFullYear();
    dispatch(requestAction.removeRequest(year, request.id));
    dispatch(availableDaysAction.incrementDays(request.dayCount));
    closeDetails();
  };

  return (
    <div className='background-block' onClick={(event) => { event.stopPropagation() }}>
      <div className='pending-approval-block'>
        <div className='pending-approval-header'>
          <span className='header-form-title'>Request for vacation</span>
          <img className='copy-icon' src='/image/copy.svg' />
        </div>
        <div className='request-item'>
          <img className='request-icon-form' src="/image/Vac_req.svg" />
          <div className='request-info'>
            <div className='name-request-form'> {request.type}: {request.startDate} - {request.endDate} ({request.dayCount} days)</div>
            <div className='date-create-form'>Created: {request.dateCreate}</div>
            <div className='status-request-form'>{request.status}</div>
          </div>
        </div>
        <div className='approved-block'>
          <span className='subtitle-block'>Already approved</span>
          <AlreadyApprovedItem approver={request.approver} />
          <AlreadyApprovedItem approver={request.approver} />
        </div>
        <div className='current-approvers-block'>
          <span className='subtitle-block'>Current approver(s)</span>
          <Person person={persons[0]} />
        </div>
        <div className='next-approvers-block'>
          <span className='subtitle-block'>Next approver(s)</span>
          <Person className="vacation-margin" person={persons[1]} />
          <Person className="vacation-margin" person={persons[2]} />
        </div>
        <div className='final-step-block'>
          <span className='subtitle-block'>Documents registration (final step)</span>
          <Person person={persons[3]} />
        </div>
        <div className='pending-approval-footer'>
          <div className='cancel-btn' onClick={cancelRequest}>CANCEL REQUEST</div>
          <div className='change-btn' onClick={showChangeWindow}>CHANGE</div>
          <div className='close-btn' onClick={closeDetails}>CLOSE</div>
        </div>
      </div>
    </div>
  );
}
