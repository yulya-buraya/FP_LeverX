import { useSelector } from 'react-redux';
import '../../style/vacation.scss';
export const Vacation = () => {
  const { availableDays } = useSelector((state) => state);
  return (
    <div className='vacation-block-info'>
      <span className='vacation-days-label'>Vacation Days</span>
      <span className='available-label'>Available</span>
      <label className='count-days-label'>{availableDays}</label>
      <hr className='vacation-hr' />
      <div className='btn-more-details'>
        <div className='btn-details-text'>
          <div className="icon-more">&#xAB;</div>
          <div className='text-more-details'>more details</div>
        </div>
      </div>
    </div>
  );
}


