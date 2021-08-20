import '../../style/modalWindows.scss';
import { useDispatch } from 'react-redux';
import { requestAction } from '../../store/Request/actions';
import { availableDaysAction } from '../../store/AvailableDays/actions';

export const ConfirmModalWindow = ({ active, setActive, request }) => {
    const dispatch = useDispatch();
    const handleConfirm = () => {
        dispatch(requestAction.addRequest(request));
        dispatch(availableDaysAction.decrementDays(request.dayCount));
        setActive(false);
    }
    const handleCancel = () => {
        setActive(false);
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-confirm-block' onClick={e => e.stopPropagation()}>
                <div className='header-for-form'>
                    <span className='header-form-title'>Request a vacation</span>
                </div>
                <div className="modal-content">
                    <div className='text-for-modal-window'>Please confirm creating a new vacation request:</div>
                    <div className='current-request-item'>
                        <img src={request.icon} />
                        <div className='current-name-request'>{request.startDate} - {request.endDate} ({request.dayCount} days)</div>
                    </div>
                </div>
                <div className='footer-for-form'>
                    <div className='modal-cancel-btn' onClick={handleCancel}>CANCEL</div>
                    <div className='confirm-btn' onClick={handleConfirm}>CONFIRM</div>
                </div>
            </div>
        </div>
    );
}

