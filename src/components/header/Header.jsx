import React from "react";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import profileImage from '../../siliDeli.svg'
import './Header.css'


function Header() {
    return (
        <div className="Header">
            <div className="profileImageContainer"> 
                <div className="userProfile">
                    <img src={profileImage} alt="User Profile" className="profileImage"/>    
                </div>
                <div className="UserInfoContainer">
                        <p>Startup Enabler</p>
                        <h2>SILI DELI</h2>
                    </div>
            </div>

            <div className="NotificationBell">
                <NotificationsRoundedIcon />
            </div>
        </div>
    );
}

export default Header; 