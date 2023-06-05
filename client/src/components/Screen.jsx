import React from 'react'
import { useSelector } from 'react-redux'
import Instagram from './icons/instagram.png'

const Screen = () => {
  const social = useSelector(state => state.social)
  return (
    <div className='flex justify-center items-center w-full h-full'>
         {
          social.map((item, index) => {
            return (
              <div>
                <a href={`https://www.instagram.com/${item.username}`}>

                  <img src={Instagram} alt=""  />
                </a>
                <p>{item.username}</p>
              </div>
            )
          }
          )
         }

    </div>
  )
}

export default Screen
