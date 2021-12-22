import React from 'react';

import './Sidebar.css';

function Sidebar({isActive, drone}) {
  return (
    <>
      <div className={isActive ? "sidebar-container active" : "sidebar-container"}>
        {
          drone.map((member) => (
            <div className="sidebar-item">
              <div>{member.name}</div>
              <div>{member.battery + "%"}</div>
              <div>{member.relative_altitude + "m"}</div>
              <div className={member.lora_state ? "sidebar-lora active" : "sidebar-lora"} />
              <div className={member.rpi_state ? "sidebar-rpi active" : "sidebar-rpi"} />
              <div className={"sidebar-info-button"}></div>
            </div>
          ))
        }
        
      </div>
    </>
  );
}

export default Sidebar;
