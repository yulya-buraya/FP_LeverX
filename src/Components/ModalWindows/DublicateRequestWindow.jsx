import '../../style/modalWindows.scss'
export const DublicateRequestWindow = ({ active, setActive, request }) => {
    const handleBtn = () => {
        setActive(false);
    };
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-dublicate-block' onClick={e => e.stopPropagation()}>
                <div className='header-for-form'>
                    <span className='header-form-title'>Request a vacation</span>
                </div>
                <div className="modal-content">
                    <div className='important-text-for-modal-window'>It looks like you already have a request for the same period. Please check the dates of your request.</div>
                    <div className='dublicate-request-item'>
                        <img src={request.icon} />
                        <div className='dublicate-name-request'>{request.startDate} - {request.endDate} ({request.dayCount} days)</div>
                    </div>
                </div>
                <div className='footer-for-form'>
                    <div className='ok-btn' onClick={handleBtn}>Ok, got it</div>
                </div>
            </div>
        </div>
    );
}

