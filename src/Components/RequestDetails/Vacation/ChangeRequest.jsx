import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REQUEST_TYPES from '../../../static/data/REQUEST_TYPES'
import { CommentComponent } from '../../RequestFormComponents/CommentComponent.jsx';
import { DateSelector } from '../../RequestFormComponents/DateSelector.jsx';
import { datesAction } from '../../../store/Dates/actions';
import { commentsAction } from '../../../store/Comment/actions';
import { requestAction } from '../../../store/Request/actions';
import { availableDaysAction } from '../../../store/AvailableDays/actions';
import '../../../style/forms.scss';

export const VacationChangeRequest = ({ closeWindow, request }) => {

  const requestType = REQUEST_TYPES[0];
  const comment = useSelector(state => state.comment);
  const { dates } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const dates = {
      startDate: request.startDate,
      endDate: request.endDate,
      dayCount: request.dayCount
    };
    dispatch(datesAction.setDates(dates));
    dispatch(commentsAction.setComment(request.comment));
  }, [request]);

  const updateRequest = function () {
    const newRequest = {
      ...request,
      comment,
      type: requestType.type,
      icon: requestType.icon,
      startDate: dates.startDate,
      endDate: dates.endDate,
      dayCount: dates.dayCount,
    };
    const year = new Date(request.dateCreate).getFullYear();
    dispatch(requestAction.updateRequest(year, newRequest));
    dispatch(availableDaysAction.decrementDays(dates.dayCount-request.dayCount));
    closeWindow();
  };

  return (
    <div className='background-block' onClick={(e) => e.stopPropagation()}>
      <div className='vacation-change-block'>
        <div className='header-for-form'>
          <span className='header-form-title'>Change request</span>
        </div>
        <div className='request-item'>
          <img className='request-icon-form' src="/image/Vac_req.svg" />
          <div className="request-info">
            <div className='name-request-form'>Vacation: {request.startDate} - {request.endDate} (2 days)</div>
            <div className='date-create-form'>Created: {request.dateCreate}</div>
            <div className='status-request-form'>{request.status}</div>
          </div>
        </div>
        <div className="vacation-form-block">
          <div className="dropdown">
            <div className="request-list blocked">
              {requestType.type}
            </div>
          </div>
          <div className='vacation-dates'>
            <DateSelector type={requestType.type} request={request} />
          </div>
          <div className='vacation-comment'>
            <CommentComponent comment={request.comment} />
          </div>
        </div>
        <div className='footer-for-form'>
          <div className='vc-cancel-btn' onClick={closeWindow}>CANCEL</div>
          <div className='save-btn' onClick={updateRequest}>SAVE</div>
        </div>
      </div>
    </div>
  );
}

