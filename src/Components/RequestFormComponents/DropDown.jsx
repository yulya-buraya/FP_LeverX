import React from 'react';
import '../../style/dropDown.scss';

export const DropDown = (props) => {

  const [isVisibile, setVisibility] = React.useState('');

  function switchDropdownMenu() {
    setVisibility(!isVisibile);
  }

  function setType(value) {
    props.setType(value);
    switchDropdownMenu();
  }

  return (
    <div className="dropdown">
      <div className="request-list" onClick={() => switchDropdownMenu()}>{props.type.type}</div>
      { isVisibile ? (
        <ul>
          {props.values.map((v, k) => {
            return <li key={k} onClick={() => { setType(v) }}>
              <a href={"#" + v.type}>
                {v.type}
                <div className="request-list-arrow">
                </div>
              </a>
            </li>;
          })}
        </ul>
      ) :
        (
          null
        )
      }

    </div>

  );
}
