import React from 'react'

import '../Assests/CSS/sidebar.css'

import Money from '../Assests/Images/money.svg'
import Eye from '../Assests/Images/eye.svg'

const Sidebar = () => {
  return (
    <nav>
        <div className='navbar'>
            <div className='container nav_container'>
                <input className='checkbox' type="checkbox" name="" id="" />
                <div className='hamburger_lines'>
                    <span className='line line1'></span>
                    <span className='line line2'></span>
                    <span className='line line3'></span>
                </div>  
                <div className='menu_items'>  
                    <p>sign in</p>
                    <p>legal</p>
                    <p>licenses</p>
                    <p>security</p>
                    <p>careers</p>
                    <p>press</p>
                    <p>support</p>
                    <p>status</p>
                    <p>codeblog</p>
                    <div className='icons'>
                        <img src={Money} alt="money" />
                        <img src={Eye} alt="eye" />
                    </div>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Sidebar
