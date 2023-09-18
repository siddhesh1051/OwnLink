import React from 'react'
import AnalyticsBox from './AnalyticsBox'

const Analytics = () => {
  return (
    
    <div className='p-5 rounded-xl bg-[#222430] w-full h-[85vh] flex flex-col '>

        <div className='flex w-full px-6 py-2 my-2 gap-4 justify-center items-center '>

        <AnalyticsBox type='Views' />
        <AnalyticsBox type='Views' />
        </div>
        <div className='flex w-full px-6 py-2 my-2 justify-center items-center '>
            <AnalyticsBox type='Views' />
        </div>

    </div>
    
  )
}

export default Analytics
