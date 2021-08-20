import React, { useState } from 'react';
import moment from 'moment';
import { DropDown } from '../RequestFormComponents/DropDown.jsx';
import { CommentComponent } from '../RequestFormComponents/CommentComponent.jsx';
import REQUEST_TYPES from '../../static/data/REQUEST_TYPES'
import { DateSelector } from '../RequestFormComponents/DateSelector.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { requestAction } from '../../store/Request/actions';
import { LessTwoWeekModalWindow } from '../ModalWindows/LessTwoWeekModalWindow.jsx';
import { ConfirmModalWindow } from '../ModalWindows/ConfirmModalWindow.jsx';
import { TooLongVacationWindow } from '../ModalWindows/TooLongVacationWindow.jsx';
import { HolidaysModalWindow } from '../ModalWindows/HolidaysModalWindow.jsx';
import { DublicateRequestWindow } from '../ModalWindows/DublicateRequestWindow.jsx';
import '../../style/vacationRequest.scss';



export const NewVacationRequest = () => {

  const holidaysInBelarus = ['01 Jan', '02 Jan', '07 Jan', '08 Mar', '01 May', '09 May', '11 May', '03 Jul', '07 Nov', '25 Dec'];
  const [isModalLessTwoWeekActive, setModalLessTwoWeekActivity] = useState(false);
  const [isModalConfirmActive, setModalConfirmActivity] = useState(false);
  const [isModalTooLongVacationActive, setModalTooLongVacationActivity] = useState(false);
  const [isModalHolidaysActive, setModalHolidaysActivity] = useState(false);
  const [isModalDublicateActive, setModalDublicateActivity] = useState(false);
  const [requestType, setRequestType] = React.useState(REQUEST_TYPES[0]);
  const { dates } = useSelector((state) => state);
  const comment = useSelector(state => state.comment);
  const { requests } = useSelector(state => state);
  const dispatch = useDispatch();

  const request = {
    comment,
    type: requestType.type,
    icon: requestType.icon,
    dateCreate: moment().format("DD MMM YYYY"),
    startDate: dates.startDate,
    endDate: dates.endDate,
    dayCount: dates.dayCount,
    status: "Pending Approval"
  };

  const isRequestExist = (request, requests) => {
    let isExist = false;
    for (let year in requests) {
      requests[year].forEach(r => {
        if (r.type == REQUEST_TYPES[0].type &&
          r.startDate == request.startDate &&
          r.endDate == request.endDate) {
          isExist = true;
        }
      })
    }
    return isExist;
  };

  const handleSubmit = (event) => {

    if (requestType.type == REQUEST_TYPES[0].type) {
      let startVacation = dates.startDate;
      let endVacation = dates.endDate;
      let durationVacation = dates.dayCount;
      let waitingTime = moment(startVacation).diff(moment(), "days") + 1;

      if (isRequestExist(request, requests)) {
        setModalDublicateActivity(true);
      }
      else if (durationVacation > 14) {
        setModalTooLongVacationActivity(true);
      }
      else if (holidaysInBelarus.includes(moment(startVacation).format("DD MMM")) && holidaysInBelarus.includes(moment(endVacation).format("DD MMM")) ||
        ((moment(startVacation).isoWeekday() == 6 || moment(startVacation).isoWeekday() == 7)) && durationVacation == 1 ||
        (moment(endVacation).isoWeekday() == 7 && durationVacation == 2) ||
        (moment(startVacation).isoWeekday() == 6 && durationVacation == 3 && holidaysInBelarus.includes(moment(endVacation).format("DD MMM"))) ||
        (moment(endVacation).isoWeekday() == 7 && durationVacation == 3 && holidaysInBelarus.includes(moment(startVacation).format("DD MMM")))) {

        setModalHolidaysActivity(true);
      }
      else if (waitingTime < 14) {
        setModalLessTwoWeekActivity(true);
      }
      else {
        setModalConfirmActivity(true);
      }
    }
    else {
      dispatch(requestAction.addRequest(request));
    }
  }

  return (

    <div className='new-vacation-request-form' style={{ height: requestType.height }}>
      <img className='vacation' src={requestType.src} />
      <span className='text-like-title'>New Request</span>
      <br />
      <DropDown values={REQUEST_TYPES} type={requestType} setType={setRequestType} />
      <DateSelector type={requestType.type} />
      <CommentComponent />
      <div className='button-and-link'>
        <button className='submit-button' onClick={handleSubmit}>SUBMIT</button>
        <div className='link-block'>
          <span className='text-before-link'>Have questions? </span>
          <a href="#" className="text-like-link">Read FAQ</a>
        </div>
        <LessTwoWeekModalWindow active={isModalLessTwoWeekActive} setActive={setModalLessTwoWeekActivity} request={request} />
        <ConfirmModalWindow active={isModalConfirmActive} setActive={setModalConfirmActivity} request={request} />
        <TooLongVacationWindow active={isModalTooLongVacationActive} setActive={setModalTooLongVacationActivity} request={request} />
        <HolidaysModalWindow active={isModalHolidaysActive} setActive={setModalHolidaysActivity} request={request} />
        <DublicateRequestWindow active={isModalDublicateActive} setActive={setModalDublicateActivity} request={request} />
      </div>
    </div>
  );
}
