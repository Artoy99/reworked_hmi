import React from 'react';

import './Sidebar.css';

function Sidebar({isActive}) {


  return (
    <>
    {console.log(isActive)}
      <div className={isActive ? "sidebar-container active" : "sidebar-container"}>
        <div className="sidebar-button">
          button
        </div>
      </div>
    </>
  );
}

export default Sidebar;
