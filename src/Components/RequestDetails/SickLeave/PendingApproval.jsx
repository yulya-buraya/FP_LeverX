import { useDispatch, useSelector } from 'react-redux';
import { requestAction } from '../../../store/Request/actions';
import '../../../style/forms.scss'
import Person from '../Person';

export const SickPendingApproval = ({ closeDetails, showChangeWindow, request }) => {

  const { persons } = useSelector(state => state);
  const dispatch = useDispatch();

  const cancelRequest = function () {
    const year = new Date(request.dateCreate).getFullYear();
    dispatch(requestAction.removeRequest(year, request.id));
    closeDetails();
  };

  return (
    <div className='background-block' onClick={(event) => { event.stopPropagation() }}>
      <div className='sick-pending-approval-block'>
        <div className='pending-approval-header'>
          <span className='pending-approval-header-title'>Sick leave request</span>
          <img className='sick-copy-icon' src='/image/copy.svg' />
        </div>
        <div className='request-item'>
          <img className='request-icon-form' src="/image/Sick_leave.svg" />
          <div className="request-info">
            <div className='name-request-form'>{request.type}: {request.startDate} - {request.endDate}</div>
            <div className='date-create-form'>Created: {request.dateCreate}</div>
            <div className='status-request-form'>{request.status}</div>
          </div>
        </div>
        <div className='notified-users-block'>
          <span className='subtitle-block'>Notified users</span>
          <Person className="sick-margin" person={persons[0]} />
          <Person className="sick-margin" person={persons[1]} />
          <Person className="sick-margin" person={persons[2]} />
        </div>
        <div className='sick-final-block'>
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
