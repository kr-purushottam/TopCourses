import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2 gap-y-12'>
        <div className='spinner'></div>
        <p className='text-[#22223a] text-lg font-semibold'>
            Loading...
        </p>
    </div>
  )
}

export default Spinner;
