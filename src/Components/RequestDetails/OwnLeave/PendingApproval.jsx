import { useDispatch, useSelector } from 'react-redux';
import { requestAction } from '../../../store/Request/actions';
import '../../../style/forms.scss'
import AlreadyApprovedItem from '../AlreadyApprovedItem';
import Person from '../Person';

export const OwnPendingApproval = ({ closeDetails, showChangeWindow, request }) => {

  const { persons } = useSelector(state => state);
  const dispatch = useDispatch();

  const declineRequest = function () {
    const year = new Date(request.dateCreate).getFullYear();
    dispatch(requestAction.removeRequest(year, request.id));
    closeDetails();
  };

  return (
    <div className='background-block' onClick={(event) => { event.stopPropagation() }}>
      <div className='pending-approval-block'>
        <div className='pending-approval-header'>
          <span className='header-form-title'>Request for leave at own expense</span>
          <img className='own-copy-icon' src='/image/copy.svg' />
        </div>
        <div className='own-request-item'>
          <img className='request-icon-form' src="/image/Group.svg" />
          <div className="own-request-info">
            <div className='own-name-form'>{request.type}: {request.startDate} (11:00 - 14:00) - {request.endDate} (09:00 - 12:00)</div>
            <div className='own-date-form'>Created: {request.dateCreate}<br />Reason: {request.comment}</div>
            <div className='own-status-form'>{request.status}</div>
          </div>
        </div>
        <div className='own-approved-block'>
          <span className='subtitle-block'>Already approved</span>
          <AlreadyApprovedItem approver={request.approver} />
          <AlreadyApprovedItem approver={request.approver} />
        </div>
        <div className='own-current-block'>
          <span className='subtitle-block'>Current approver(s)</span>
          <Person person={persons[0]} />
        </div>
        <div className='own-next-block'>
          <span className='subtitle-block'>Next approver(s)</span>
          <Person className="own-margin" person={persons[1]} />
          <Person className="own-margin" person={persons[2]} />

        </div>
        <div className='own-final-block'>
          <span className='subtitle-block'>Documents registration (final step)</span>
          <Person person={persons[3]} />
        </div>
        <div className='pending-approval-footer'>
          <div className='decline-btn' onClick={declineRequest}>DECLINE REQUEST</div>
          <div className='change-btn' onClick={showChangeWindow}>CHANGE</div>
          <div className='close-btn' onClick={closeDetails}>CLOSE</div>
        </div>
      </div>
    </div>
  );
}
