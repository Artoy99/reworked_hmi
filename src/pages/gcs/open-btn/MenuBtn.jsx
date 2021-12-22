import React from 'react';

import './MenuBtn.css';

function MenuBtn({open}) {
  return (
    <>
      <div className={open ? "menubtn-container open" : "menubtn-container"}>
        <div className="menubtn-burger"/>
      </div>
       {/* <div className="openbtn-container">
        <div className={open ? "openbtn-burger open" : "openbtn-burger"}/>
      </div> */}
    </>
  );
}

export default MenuBtn;