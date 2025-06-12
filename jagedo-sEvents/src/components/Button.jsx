import React from 'react'

const Button  = ({children, onClick, className}) => {
  return (
    <div>
        <button className={`py-2 px-4 rounded-full ${className} onClick={onClick}`}>
            {children}
        </button>
    </div>
  )
}

export default Button 