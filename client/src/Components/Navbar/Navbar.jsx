import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from '@mui/material';

import "./Navbar.scss"
import Cart from '../Cart/Cart';
function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
            <div className="item">
              <img src="/images/bdflag.png" alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
                <Link className='link' to="/products/1">Women</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/2">Man</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">Children</Link>
            </div>

        </div>
        <div className="center">
            <Link className='link' to="/">Online Shopping</Link>
        </div>
        <div className="right">
            <div className="item">
              <Link className='link' to="/">Home</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">About</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Conact</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Stores</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderOutlinedIcon />
              <div className="cartIcon" onClick={()=>setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar