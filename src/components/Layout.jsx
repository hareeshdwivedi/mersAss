import React from 'react'

import '../Assests/CSS/layout.css'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        {children}
    </div>
  )
}

export default Layout