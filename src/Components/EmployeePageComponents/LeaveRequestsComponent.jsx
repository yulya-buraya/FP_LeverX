import { useSelector } from 'react-redux';
import '../../style/vacation.scss';
import { YearRequests } from '../RequestListComponents/YearRequests.jsx';

export const LeaveRequestsComponent = () => {

  const { requests } = useSelector(state => state);

  const renderRequestsByYear = () => {
    let requestsByYear = [];
    for (let year in requests) {
      requestsByYear.push(<YearRequests key={year} year={year} />);
    }
    return requestsByYear;
  }
  return (
    <div className='leave-requests-content'>
      <div className='title-for-leave-requests'>My Leave Requests</div>
      {
        requests == undefined ?
          <div className="list-requests">
            <div className='empty-list-requests'>
              <img className="empty-list" src='./image/Pic.png' />
            </div>
          </div>
          :
          renderRequestsByYear()
      }
    </div>
  );
}
