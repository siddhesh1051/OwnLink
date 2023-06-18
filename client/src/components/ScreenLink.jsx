import React from 'react'
import landImg from './img/bg1.png'
import "../../src/App.css"

const ScreenLink = ({link,title,linkImage}) => {

  const getBg = (linkImage) => {
    if(linkImage===undefined) return landImg;
    else return linkImage
    
  }

  return (
    <div className='flex text-white w-[87%] mt-2 min-w-[80%] min-h-[150px] rounded-xl aspect-video relative ' >
 
      <a href={link} target='_blank' className='place-self-center'   >
      <div className='aspect-video relative '>

      <img src={getBg(linkImage)} className='h-full w-full rounded-xl' />
      <div className="overlay-link" style={{background:"linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 90%)"}}>
        <p className='ml-4'>{title}</p>
        </div>
      </div>
      </a>
    </div> 
  )
}

export default ScreenLink
