import React from "react";
import { IoIosNotifications } from "react-icons/io";
import "./notification.css";
function Notification() {
  const [isDropDown, setIsDropDown] = React.useState(false);
  return (
    <div className='navigation-menu-notification'>
      <div className='notification-icon-container'>
        <IoIosNotifications onClick={(val) => setIsDropDown(!isDropDown)} className='navigation-menu-notification-icon' />
        <div className='notification-conter'></div>
      </div>
        {isDropDown ? <NotificationDropDown /> : null}
    </div>
  );
}


function NotificationDropDown() {
  return (
    <div className='notification-menu-dropdonw'>
    <div className='notification-menu-dropdonw-header'>
    This is simply a test; the UI is terrible, and Data From A JSON File should be present. 
    </div>
  </div>
  )
}


export default Notification;
