import { Button, IconButton } from '@mui/joy'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeLink } from '../store/linkSlice';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import axios from 'axios';

const LinkDiv = ({title,link,setLinkModal,settitle, setUrlLink}) => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email")

  const handleEdit = async (email, UrlLink, title)=>{
    settitle(title)
    setUrlLink(link)
    setLinkModal(true);
   
      console.log(email, link, title)
      const { data } = await axios.post(process.env.REACT_APP_API + '/addlink', {
        email,
        link: link,
        title
      })
    

  }

  return (
    <div className='flex justify-between items-center px-2 py-3 bg-[#202229] rounded-md mt-3' >
      <div className='flex flex-col justify-center items-start gap-2 ml-3 my-1'>
        <h1 className='text-xl'>{title}</h1>
        <p className=' text-sm'>{link}</p>
      </div>
      <div>
<button className='px-3 py-2 bg-[#34353e] rounded-lg mr-2 hover:bg-[#262831] hover:rounded-xl duration-150' onClick={(e)=>handleEdit(email, link, title)} ><FiEdit2/></button>
        <button className='px-3 py-2 bg-[#34353e] rounded-lg hover:bg-[#262831] hover:rounded-xl duration-150' onClick={() =>
                      dispatch(
                        removeLink({ email,link })
                      )} ><FiTrash2 className=" text-red-400"/></button>




      </div>
    </div>
  )
}

export default LinkDiv
