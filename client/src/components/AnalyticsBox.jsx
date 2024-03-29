import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const AnalyticsBox = ({ type, totalClicks, totalViews, CTR }) => {

    const dispatch = useDispatch();
    const checkCTR = (value) => {
        if (value > 150) return 100;
        return value;
      }


    return (
        <div className='bg-[#161C23] text-2xl w-full h-28  text-white rounded-xl flex flex-col justify-center items-center px-4 py-2 '>
            <p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
                {
                    type === 'Views' ? totalViews : type === 'Clicks' ? totalClicks : type === 'CTR' ?  (isNaN(checkCTR(CTR)) ? '0.00%' : `${parseFloat(checkCTR(CTR)).toFixed(2)}%`) : ''
                }
            </p>
            <div className='flex items-center justify-center gap-1'>
                {/* {ownlinkViews === 1 ? " View" : " Views"} */}
                <p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
                    {type}
            </p>
            </div>
        </div>
    )
}

export default AnalyticsBox
