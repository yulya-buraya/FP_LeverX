import '../../style/modalWindows.scss'
import { useDispatch } from 'react-redux';
import { requestAction } from '../../store/Request/actions';
import { availableDaysAction } from '../../store/AvailableDays/actions';

export const TooLongVacationWindow = ({ active, setActive, request }) => {
    const dispatch = useDispatch();
    const handleConfirm = () => {
        dispatch(requestAction.addRequest(request));
        dispatch(availableDaysAction.decrementDays(request.dayCount));
        setActive(false);
    }
    const handleChange = () => {
        setActive(false);
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='too-long-vacation-block' onClick={e => e.stopPropagation()}>
                <div className='header-for-form'>
                    <span className='header-form-title'>Request a vacation</span>
                </div>
                <div>
                    <div className='important-text-for-modal-window'>We know you must be tired. But please consider shoter vacation. How about 2 weeks?</div>
                    <div className='too-long-request-item'>
                        <img src={request.icon} />
                        <div className='too-long-current-name-request'>{request.startDate} - {request.endDate} ({request.dayCount} days) </div>
                    </div>
                </div>
                <div className='footer-for-form'>
                    <div className='confirm-anyway-btn' onClick={handleConfirm}>confirm anyway</div>
                    <div className='change-dates-btn' onClick={handleChange}>change dates</div>
                </div>
            </div>
        </div>
    );
}
