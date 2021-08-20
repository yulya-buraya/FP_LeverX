import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REQUEST_TYPES from '../../../static/data/REQUEST_TYPES'
import { CommentComponent } from '../../RequestFormComponents/CommentComponent.jsx';
import { DateSelector } from '../../RequestFormComponents/DateSelector.jsx';
import { datesAction } from '../../../store/Dates/actions';
import { commentsAction } from '../../../store/Comment/actions';
import { requestAction } from '../../../store/Request/actions';
import '../../../style/forms.scss'

export const SickChangeRequest = ({ closeWindow, request }) => {

  const requestType = REQUEST_TYPES[1];
  const { comment } = useSelector(state => state);
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
    closeWindow();
  };

  return (
    <div className='background-block' onClick={(e) => e.stopPropagation()}>
      <div className='sick-change-block'>
        <div className='header-for-form'>
          <span className='header-form-title'>Change request</span>
        </div>
        <div className='request-item'>
          <img className='sick-icon' src="/image/Sick_leave.svg" />
          <div className="sick-request-info">
            <div className='sick-name-form'>Sick leave: {request.startDate} - {request.endDate} </div>
            <div className='sick-date-form'>Created: {request.dateCreate}<br />Hours worked: 4</div>
            <div className='sick-status-form'>{request.status}</div>
          </div>
        </div>
        <div className="sick-form-block">
          <div className="dropdown">
            <div className="request-list blocked">
              {requestType.type}
            </div>
          </div>
          <div className='sick-dates'>
            <DateSelector type={requestType.type} request={request} />
          </div>
          <div className='sick-comment'>
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

