import React from 'react'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp' 
import PermIdentifyIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'

import {Link} from 'react-router-dom'



export default function SideBar() {
  return (
<div className='SideBar'>
    <div className='SideBarWrapper'>
        <div className='SideBarMenue'>
            <h3 className='SideBarTitle'>dashboard</h3>
            <ul className='SideBarList'>
                <Link to='/' className='link'>
                    <li className='SideBarListItem active'>
                        <LineStyleIcon className='SideBarIcon'/>
                        Home
                    </li>
                </Link>
                <li className='SideBarListItem'>
                    <TimelineIcon className='SideBarIcon'/>
                Analytic
                </li>
                <li className='SideBarListItem'>
                    <TrendingUpIcon className='SideBarIcon'/>
                Sales
                </li>
            </ul>
        </div>

        <div className='SideBarMenue'>
            <h3 className='SideBarTitle'>Quick menu</h3>
            <ul className='SideBarList'>
                <Link to='/Users' className='link'>
                <li className='SideBarListItem active'>
                    <PermIdentifyIcon className='SideBarIcon'/>
                Users
                </li>
                </Link>
                <Link to='/NewUser' className='link'>
                <li className='SideBarListItem'>
                    <StorefrontIcon className='SideBarIcon'/>
                new user
                </li>
                </Link>
                <Link to='/Products' className='link'>
                <li className='SideBarListItem'>
                    <AttachMoneyIcon className='SideBarIcon'/>
                products 
                </li>
                </Link>
                <li className='SideBarListItem'>
                    <BarChartIcon className='SideBarIcon'/>
                transaction
                </li>
                <li className='SideBarListItem'>
                    <MailOutlineIcon className='SideBarIcon'/>
                report
                </li>
            </ul>
        </div>

        <div className='SideBarMenue'>
            <h3 className='SideBarTitle'>notification</h3>
            <ul className='SideBarList'>
                <li className='SideBarListItem active'>
                    <MailOutlineIcon className='SideBarIcon'/>
                mail
                </li>
                <li className='SideBarListItem'>
                    <DynamicFeedIcon className='SideBarIcon'/>
                mail
                </li>
                <li className='SideBarListItem'>
                    <ChatBubbleIcon className='SideBarIcon'/>
                feed back 
                </li>
                <li className='SideBarListItem'>
                    <BarChartIcon className='SideBarIcon'/>
                transaction
                </li>
                <li className='SideBarListItem'>
                    <MessageOutlinedIcon  className='SideBarIcon'/>
                messages
                </li>
                
            </ul>
        </div>
    </div>
</div>


  )
}
