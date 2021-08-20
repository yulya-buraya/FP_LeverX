import '../../style/toolTip.scss';

export const ToolTip = () => {

    return (
        <div className='tooltip-block' >
            <div className='tooltip-text' >
                <span>The days calculated here are calendar days:</span>
                <p>Calendar days = Work days + Weekends</p>
                <span> Number of days can be adjusted by Personnel Officer (Katsiaryna Barysik) in accordance with the current legislation.</span>
            </div>
        </div>
    );
}
