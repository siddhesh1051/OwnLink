import React, { useEffect } from 'react'
import AnalyticsBox from './AnalyticsBox'
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocialsViews } from '../store/getAllSocialsViews';
import { getUsername } from '../store/usernameSlice';
import LinearBar from './LinearBar';
import { getViewsInformation } from '../store/getviewsSlice';
import { getAllLinksViews } from '../store/getAllLinksViews';
import axios from 'axios';

const Analytics = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem('email');

  const username = useSelector(state => state.username.username)
  const ownlinkViews = useSelector(state => state.ownlinkViews.ownlinkViews)
  const socialsViews = useSelector(state => state.socialsViews.socialsViews)
  const linksViews = useSelector(state => state.linksViews.linksViews)

  console.log(linksViews)


  const totalClicks = socialsViews.reduce((a, b) => a + b.linkClicks, 0);
  const CTR = (totalClicks / ownlinkViews) * 100





  useEffect(() => {
    dispatch(getUsername(email))
    dispatch(getViewsInformation(username))
    dispatch(getAllSocialsViews(username))
    dispatch(getAllLinksViews(username))

  }, [])





  return (

    <div className='p-5 rounded-xl bg-[#222430] w-full  flex flex-col pb-8 '>


      <div className='flex w-full px-6 py-2 my-2 gap-8 justify-center items-center '>

        <AnalyticsBox type='Views' totalViews={ownlinkViews} />
        <AnalyticsBox type='Clicks' totalClicks={totalClicks} />
      </div>
      <div className='flex w-full px-6 py-2 my-2 justify-center items-center '>
        <AnalyticsBox type='CTR' CTR={CTR} />
      </div>

      <div className='mb-2 pb-2'>
        <h1 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-300 mb-3 mt-2'>Social Profiles</h1>
        {
          socialsViews.map((socialView) => (
            <LinearBar clicks={socialView.linkClicks} title={socialView.socialMediaIcon} key={socialView.index} type="social" />
          ))
        }

      </div>

      <div>
        <h1 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-300 mb-2 mt-4'>Links</h1>
        {
          linksViews.map((linksView) => (
            <LinearBar clicks={linksView.linkClicks} title={linksView.title} key={linksView.index} type="link" />
          ))
        }

      </div>

    </div>

  )
}

export default Analytics
