import React ,{useEffect, useState}from 'react'
import landImg from './img/bg1.png'
import "../../src/App.css"

const ScreenLink = ({ link, title, linkImage }) => {

  // const [isBg, setisBg] = useState(false)

  // // if (linkImage === undefined || linkImage === "") {
  // //   setisBg(false);
  // // }

  const getBg = (linkImage) => {
    if (linkImage === undefined || linkImage === "") return landImg;
    else return linkImage 

  }

  // useEffect(() => {
  //  setisBg(linkImage === undefined || linkImage === "")
  // }, [])
  

  return (
    <div className={`flex text-white mt-2 w-[87%] min-w-[80%] rounded-xl aspect-video relative cursor-pointer min-h-[150px] `}  >

        <div className='aspect-video relative '>
          {/* {
            isBg? */}

           
      <a href={link} target='_blank' className='place-self-center'   >
     
            <img src={getBg(linkImage)} className='h-full w-full rounded-xl' />
            <div className="overlay-link" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 90%)" }}>
              <p className='ml-4'>{title}</p>
              </div>
              </a>
           
            :
          {/* //   <a href={link} target='_blank' className=''   >


          //   <div className='flex justify-start items-center ml-2 p-3 cursor-pointer '>{title}</div>
          //   </a>
           */}

          </div>
    </div>
  )
}

export default ScreenLink
