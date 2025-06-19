import React from 'react'

const Button  = ({children, onClick, className}) => {
  return (
    <div>
        <button className={`rounded-full bg-[rgb(0,0,122)] hover:transition duration-900 font-bold hover:bg-[#FFD700] hover:text-black ease-in-out hover:cursor-pointer flex-items-center justify-center sm:w-36 md:w-32 hover:scale-110 flex-items-center px-2 py-2 ${className} onClick={onClick}`}>
            {children}
        </button>
    </div>
  )
}

export default Button 