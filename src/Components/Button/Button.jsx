import React from 'react'
import './button.css'
import {Link} from 'react-router-dom'
function Button({takeMeTo, children}) {
  return (
    <Link className='button' to={takeMeTo} className="button">{children}</Link>
  )
}

export default Button