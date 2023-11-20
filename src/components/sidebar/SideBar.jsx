import React from 'react'
import './SideBar.css'
import { SideBarData } from './SideBarData'
import logo from '../../icon.svg'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function SideBar() {
  return <div className='SideBar'>
    <div className="sideBarContent">
        <img src={logo} alt="BiNNO" className='logo'/>
        {/* insert type of user */}
        <ul className='SideBarList'>
            {SideBarData.map((val, key)=>{
                return (
                <li key={key} 
                className='row'
                id={window.location.pathname == val.link ? "active" : " "}
                onClick={()=> {
                    window.location.pathname = val.link;
                }}
                >
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
                </li>
                
                );   
            })}
        </ul>
    </div>
    <div className="logout">
        <LogoutRoundedIcon />
        <p>Logout</p>
    </div>
    </div>;

  
}

export default SideBar