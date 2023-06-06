import React from 'react'

const SocialIcon = ({icon,link,username}) => {
  return (
    <div className='ml-4 m-2  '> 
        <a href={`${link}`} target='_blank'>

      <img src={icon} alt="" className='scale-125' />
        </a>
    </div>
  )
}

export default SocialIcon
