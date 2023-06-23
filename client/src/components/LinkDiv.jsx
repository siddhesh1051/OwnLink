import React from 'react'
import { useDispatch } from 'react-redux'
import { removeLink } from '../store/linkSlice';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { STATUSES } from '../store/store';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';

const LinkDiv = ({title,link,linkImage,setLinkModal,settitle, setUrlLink,setLinkImage,index}) => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email")
  const linkStatus = STATUSES.IDLE;

  const handleEdit = async (email, UrlLink, title,linkImage)=>{
    settitle(title)
    setUrlLink(link)
    setLinkImage(linkImage)
    setLinkModal(true);
   
      console.log(email, link, title,linkImage)
      const { data } = await axios.post(process.env.REACT_APP_API + '/addlink', {
        email,
        link: link,
        title,
        linkImage
      })
    

  }

  return (<>{
      linkStatus === STATUSES.LOADING ? 

      <Skeleton height={100}  />

    :<motion.div className='flex justify-between items-center px-2 py-3 bg-[#202229] rounded-md mt-3' 
    initial={{ x: 80,opacity:0 }}
    animate={{  x: 0,opacity:1 }}
    transition={{
      delay: index*0.2,
      duration:0.3
         }}
         whileHover={{scale:1.01}}
         >
      <div className='flex flex-col justify-center items-start gap-2 ml-3 my-1'>
        <h1 className='text-xl'>{title}</h1>
        <p className=' text-sm'>{link}</p>
      </div>
      <div>
<button className='px-3 py-2 bg-[#34353e] rounded-lg mr-2 hover:bg-[#262831] hover:rounded-xl duration-150' onClick={(e)=>handleEdit(email, link, title,linkImage)} ><FiEdit2/></button>
        <button className='px-3 py-2 bg-[#34353e] rounded-lg hover:bg-[#262831] hover:rounded-xl duration-150' onClick={() =>
                      dispatch(
                        removeLink({ email,link })
                      )} ><FiTrash2 className=" text-red-400"/></button>




      </div>
    </motion.div>
    }
    </>
  )
}

export default LinkDiv
