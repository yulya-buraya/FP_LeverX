import '../../style/header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='text-header'>
          <img className='header-subtitle-img' src='/image/LeverX_group.svg' />
          <img className='header-title-img' src='/image/Employee_services.svg' />
        </div>
        <div className='header-tabs'>
          <input type='radio' name='tab-btn' id='tab-adress-book' value='' />
          <label htmlFor='adress-book--tab'>Address Book</label>
          <input type='radio' name='tab-btn' id='tab-leave-request' value='' onChange={() => { }} checked />
          <label htmlFor='leave-request--tab'>Leave Requests</label>
        </div>
        <div className='header-slider'>
          <div className='tab-selector'></div>
        </div>
        <div className='header-btn-message'>
          <img src='/image/plane.svg' />
        </div>
        <div className='header-btn-current-user'>
          <img className='avatar-current-user opacity' src='/image/avatar.png' />
          <div className='current-user-name'>ANNA SMITH</div>
        </div>
        <div className='header-btn-exit'>
          <img src='/image/exit.svg' />
        </div>
      </div>

    </header>

  );
}

