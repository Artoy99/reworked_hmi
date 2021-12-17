import React from 'react';

import './Sidebar.css';

function Sidebar({isActive}) {
  return (
    <>
      <div className={isActive ? "sidebar-container active" : "sidebar-container"}>
        <div className="sidebar-item">
          item
        </div>
        <div className="sidebar-item">
          item
        </div>
        <div className="sidebar-item">
          item
        </div>
        <div className="sidebar-item">
          item
        </div>
      </div>
    </>
  );
}

export default Sidebar;
