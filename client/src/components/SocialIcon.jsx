import React from 'react'

const SocialIcon = ({icon,link,username}) => {
  return (

    <div className='ml-3 bg-gray-300 bg-opacity-80 shadow-3xl backdrop-blur-[10px] p-2 rounded-full flex-shrink-0'> 
        <a href={`${link}`} target='_blank'>

      <img src={icon} alt="" className='scale-110' />
        </a>
    </div>
  )
}

export default SocialIcon
