import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const AnalyticsBox = ({ type, totalClicks, totalViews, CTR }) => {
    // const ownlinkViews = useSelector(state => state.ownlinkViews.ownlinkViews)
    // console.log(ownlinkViews);

    const dispatch = useDispatch();
    // const email = localStorage.getItem('email');
    // const username = useSelector(state => state.username.username)



    // useEffect(() => {
    //     dispatch(getUsername(email))
    // }, [])

    return (
        <div className='bg-[#161C23] text-2xl w-full h-28  text-white rounded-xl flex flex-col justify-center items-center px-4 py-2 '>
            <p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
                {
                    type === 'Views' ? totalViews : type === 'Clicks' ? totalClicks : type === 'CTR' ? parseFloat(CTR.toFixed(2)) + '%' : ''
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
