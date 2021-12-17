import React from 'react';

import './OpenBtn.css';

function OpenBtn({open}) {
  return (
    <>
      <div className={open ? "openbtn-container open" : "openbtn-container"}>
        <div className="openbtn-burger"/>
      </div>
       {/* <div className="openbtn-container">
        <div className={open ? "openbtn-burger open" : "openbtn-burger"}/>
      </div> */}
    </>
  );
}

export default OpenBtn;