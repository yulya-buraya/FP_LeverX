import '../../style/modalWindows.scss';
import { useDispatch } from 'react-redux';
import { requestAction } from '../../store/Request/actions';
import { availableDaysAction } from '../../store/AvailableDays/actions';

export const HolidaysModalWindow = ({ active, setActive, request }) => {
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
            <div className='holiday-modal-block' onClick={e => e.stopPropagation()}>
                <div className='header-for-form'>
                    <span className='header-form-title'>Request a vacation</span>
                </div>
                <div className="modal-content">
                    <div className='important-text-for-modal-window'>The selected interval includes only public holidays or weekend days. Please review the selected dates.</div>
                    <div className='holiday-request-item'>
                        <img src={request.icon} />
                        <div className='holiday-current-name-request'>{request.startDate} - {request.endDate} ({request.dayCount} days)</div>
                    </div>
                </div>
                <div className='footer-for-form'>
                    <div className='confirm-anyway-btn' onClick={handleConfirm} >confirm anyway</div>
                    <div className='change-dates-btn' onClick={handleChange} >change dates</div>
                </div>
            </div>
        </div>
    );
}
