import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { LuMonitor } from "react-icons/lu";

const NavSide = () => {
  return (
    <div className='left'>
        <ul  className='navul'>
        <li s><Link to='/' className='tab'><AiOutlineHome style={{fontSize: 30}}/></Link></li> 
        <li ><Link to='/movies' ><BiMoviePlay style={{fontSize: 30}}/></Link></li>
        <li ><Link to='/series'><LuMonitor style={{fontSize: 30}}/></Link></li>
        <li><Link><BsSearch style={{fontSize: 30}}/></Link></li>
        </ul>
      
    </div>
  )
}

export default NavSide
