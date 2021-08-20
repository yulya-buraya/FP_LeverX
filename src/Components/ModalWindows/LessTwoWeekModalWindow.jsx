import '../../style/modalWindows.scss';
import { useDispatch } from 'react-redux';
import { requestAction } from '../../store/Request/actions';
import { availableDaysAction } from '../../store/AvailableDays/actions';

export const LessTwoWeekModalWindow = ({ active, setActive, request }) => {
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
            <div className='less-two-week-block' onClick={e => e.stopPropagation()}>
                <div className='header-for-form'>
                    <span className='header-form-title'>Request a vacation</span>
                </div>
                <div className="modal-content">
                    <div className='important-text-for-modal-window'>Please submit your request at least two weeks before the desired start date.</div>
                    <div className='less-two-week-text'>Would you like to confirm the request with the dates as suggested below?</div>
                    <div className='less-two-week-request-item'>
                        <img src={request.icon} />
                        <div className='current-name-request'>{request.startDate} - {request.endDate} ({request.dayCount} days) </div>
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
