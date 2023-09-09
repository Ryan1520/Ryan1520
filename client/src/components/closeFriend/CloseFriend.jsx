import React from 'react'
import './closeFriend.css'
import {Link} from 'react-router-dom'

export const CloseFriend = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <Link style={{textDecoration:"none", color:"black"}} to={`profile/${user._id}`} >
      <li className='sidebarFriend'>
        <img src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'} alt="" className="sidebarFriendImg" />
        <span className='sidebarFriendName'>{user.username}</span>
      </li>
    </Link>
  )
}
