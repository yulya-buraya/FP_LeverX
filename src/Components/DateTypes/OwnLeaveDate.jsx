import { useState, forwardRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { datesAction } from '../../store/Dates/actions'
import moment from 'moment';

export const OwnLeaveDate = ({ request }) => {

    const [startDate, setStartDate] = useState(request !== undefined ? new Date(request.startDate) : new Date());
    const [endDate, setEndDate] = useState(request !== undefined ? new Date(request.endDate) : new Date());
    const dispatch = new useDispatch();

    useEffect(() => {
        const dates = {
            startDate: moment(startDate).format("DD MMM YYYY"),
            endDate: moment(endDate).format("DD MMM YYYY")
        }

        dispatch(datesAction.setDates(dates));
    }, [startDate, endDate]);

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

    return (<div className='dates-block-own'>
        <div className='dates-name'>
            <span className='text-like-subtitle'>Start Date </span>
            <span className='text-like-comment'>(inclusive)</span>
        </div>
        <div className='start-date'>
            <DatePicker
                selected={startDate}
                onChange={date => (setStartDate(date), setEndDate(date))}
                selectsStart
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
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd MMM yyyy"
                customInput={<CustomInput />}
            />
        </div>
    </div>
    );
}
