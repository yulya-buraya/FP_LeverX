import { ToolTip } from '../RequestFormComponents/ToolTip.jsx';
import { useRef, useState, forwardRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { datesAction } from '../../store/Dates/actions'
import moment from 'moment';

export const VacationDate = ({ request }) => {

    const [startDate, setStartDate] = useState(request !== undefined ? new Date(request.startDate) : new Date());
    const [endDate, setEndDate] = useState(request !== undefined ? new Date(request.endDate) : new Date());
    const [countDay, setCountDay] = useState(request !== undefined ? request.dayCount : 1);
    const [isTooltipVisible, setTooltipVisibility] = useState(false);
    const imgRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        let newCountDay = (moment(endDate).diff(moment(startDate), 'days') + 1);
        setCountDay(newCountDay);

        const dates = {
            startDate: moment(startDate).format("DD MMM YYYY"),
            endDate: moment(endDate).format("DD MMM YYYY"),
            dayCount: newCountDay
        }

        dispatch(datesAction.setDates(dates));
    }, [startDate, endDate]);

    function showTooltip() {
        return isTooltipVisible ? <ToolTip /> : null;
    }
    const CustomInput = forwardRef((props, ref) => {
        return (
            <div className="datepicker-container" >
                <label onClick={props.onClick} ref={ref}>
                    {props.value || props.placeholder}
                </label>
                <img src='/image/calendar.svg' className="calendar-icon" onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className='dates-block-vacation'>
            <div className='dates-name'>
                <span className='text-like-subtitle'>Start Date </span>
                <span className='text-like-comment'>(inclusive)</span>
            </div>
            <div className='start-date' name="startDate">
                <DatePicker
                    selected={startDate}
                    onChange={date => (setStartDate(date), setEndDate(date))}
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd MMM yyyy"
                    customInput={<CustomInput />}
                />
            </div>
            <div className='dates-name'>
                <span className='text-like-subtitle'>End Date </span>
                <span className='text-like-comment'>(inclusive)</span>
            </div>
            <div className='end-date'>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd MMM yyyy"
                    customInput={<CustomInput />}
                />
            </div>
            <div className='dates-name'>
                <span className='text-like-subtitle'>Day(s)</span>
                <img ref={imgRef} className="question-icon" src="/image/Question.svg" onMouseEnter={() => setTooltipVisibility(!isTooltipVisible)} onMouseLeave={() => setTooltipVisibility(!isTooltipVisible)} />
                {showTooltip()}
            </div>
            <input id="dayCount" type='number' className='day-count' readOnly value={countDay} />
        </div>
    );
}
