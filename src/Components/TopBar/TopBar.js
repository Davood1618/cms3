import React from 'react';
import './TopBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div>
<div className='TopBar'>
    <div className='TopBarWrapper'>
        <div className='TopLeft'> 
            <span className='logo'>sooshad</span>
        </div>

        <div className='TopRight'>
            <div className='TopBarIconContainer'>
                <NotificationsIcon></NotificationsIcon>
                <span className='TopIconBadge'>2</span>
            </div>

            <div className='TopBarIconContainer'>
                <LanguageIcon/>
                <span className='TopIconBadge'>2</span>
            </div>

            <div className='TopBarIconContainer'>
                <SettingsIcon/>
            </div>
            <img src='image/moradi.jpg' className='TopAvatar'/>
        </div>
    </div>
</div>


    </div>
  )
}
