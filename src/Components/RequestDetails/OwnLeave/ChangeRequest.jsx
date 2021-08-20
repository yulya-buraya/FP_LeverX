import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REQUEST_TYPES from '../../../static/data/REQUEST_TYPES'
import { CommentComponent } from '../../RequestFormComponents/CommentComponent.jsx';
import { DateSelector } from '../../RequestFormComponents/DateSelector.jsx';
import { datesAction } from '../../../store/Dates/actions';
import { commentsAction } from '../../../store/Comment/actions';
import { requestAction } from '../../../store/Request/actions';
import '../../../style/forms.scss';

export const OwnChangeRequest = ({ closeWindow, request }) => {

  const requestType = REQUEST_TYPES[2];
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
    closeWindow();
  };

  return (
    <div className='background-block' onClick={(e) => e.stopPropagation()}>
      <div className='own-change-block'>
        <div className='header-for-form'>
          <span className='header-form-title'>Change request</span>
        </div>
        <div className='own-request-item'>
          <img className='own-icon' src="/image/Group.svg" />
          <div className="own-request-info">
            <div className='own-name-form'>Own expense leave: {request.startDate} (11:00 - 14:00) - {request.endDate} (09:00 - 12:00)</div>
            <div className='own-date-create'>Created: {request.dateCreate}<br />Reason: {request.comment}</div>
            <div className='own-status-change'>Pending approval</div>
          </div>
        </div>
        <div className="own-form-block">
          <div className="dropdown">
            <div className="request-list blocked">
              {requestType.type}
            </div>
          </div>
          <div className='own-dates'>
            <DateSelector type={requestType.type} request={request} />
          </div>
          <div className='own-comment'>
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
