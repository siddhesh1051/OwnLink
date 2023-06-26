import React ,{useEffect, useState}from 'react'
import defaultBg from './img/defaultBg.jpg'
import "../../src/App.css"
import { STATUSES } from '../store/store'
import { useSelector } from 'react-redux'
import Links from './Links'
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion';

const ScreenLink = ({ link, title, linkImage,index }) => {

  // const [isBg, setisBg] = useState(false)

  // // if (linkImage === undefined || linkImage === "") {
  // //   setisBg(false);
  // // }

  const getBg = (linkImage) => {
    if (linkImage === undefined || linkImage === "") return defaultBg;
    else return linkImage 

  }

  const linkStatus = useSelector(state => state.link.status)

  // useEffect(() => {
  //  setisBg(linkImage === undefined || linkImage === "")
  // }, [])
  

  return (
    <>
    {
    linkStatus === STATUSES.LOADING ? <Skeleton className='w-full h-full' /> :

    <motion.div 
    initial={{ y: 20, opacity: 0 }}
    transition={{
      delay: index*0.1,
      duration: 0.3
    }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{once:true}}
    className={`flex text-white mt-2 w-[87%] min-w-[80%] rounded-xl aspect-video relative cursor-pointer min-h-[150px] `}  >

        <div className='aspect-video relative '>
          {/* {
            isBg? */}

           
      <a href={link} target='_blank' className='place-self-center'   >
     
            <img src={getBg(linkImage)} className='h-full w-full rounded-xl' />
            <div className="overlay-link" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 90%)" }}>
              <p className='ml-4'>{title}</p>
              </div>
              </a>
           
          
          {/* //   <a href={link} target='_blank' className=''   >


          //   <div className='flex justify-start items-center ml-2 p-3 cursor-pointer '>{title}</div>
          //   </a>
           */}

          </div>
    </motion.div>
          }
          </>
  )
}

export default ScreenLink
