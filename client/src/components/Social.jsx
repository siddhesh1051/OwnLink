import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import {FiTrash2,FiEdit2,FiPlus} from 'react-icons/fi'
import { removeSocial } from '../store/socialSlice';
import { Button, FormControl, FormLabel, Modal, ModalDialog, Stack, Typography } from '@mui/joy';


const Social = ({ setacc,setOpen, social, pic,link,setLink ,setUpdate,update}) => {

  const dispatch = useDispatch();
  const email = localStorage.getItem("email")
 
  
  //  console.log(socials);
  //  console.log(social);
  const socials = useSelector(state => state.social.socials)
 
   
   const isPresent = socials.find((item) => 
   item.type === social
   )
  //  console.log(isPresent);
  //  console.log(socials);


  const handleRemoveSocial = (e) => {
    dispatch(
      removeSocial({ email, type: social })  
    )
    setUpdate(!update);

  }

  const handleAdd = (e) => {
const buttonValue = e.target.value;
  // if (buttonValue !== undefined) {
  //   setacc(buttonValue);
  // }
  // else
  // {
  //   setacc(social);
  // }

  setacc(social);
  setOpen(true); 
   
}

  const handleEdit = (e) => {
    setacc(social);
    
    socials.map((item) => {
      if (item.type === social) {
        setLink(item.link);
      }
    })

    setOpen(true);
    setUpdate(!update);

  }
 return (
    <div className='flex justify-between w-full items-center py-2 px-4 duration-150 rounded-lg hover:bg-[#1d1e27] '>
      <p className='flex'><img src={pic} alt="" className='mr-4' /> {social}</p>
{     
isPresent?.type===social?

<div>
<button className='px-3 py-2 bg-[#34353e] rounded-lg mr-2 hover:bg-[#262831] hover:rounded-xl duration-150' value={social} onClick={(e) =>  handleEdit(e) }><FiEdit2/></button>
<button className='px-3 py-2 bg-[#34353e] rounded-lg hover:bg-[#262831] hover:rounded-xl duration-150' value={social} onClick={(e) =>  handleRemoveSocial(e) }><FiTrash2 className=" text-red-400"/></button>

</div>
 
:
<button className='px-3 py-2 bg-[#34353e] rounded-lg hover:bg-[#262831] hover:rounded-xl duration-150' value={social} onClick={(e) =>  handleAdd(e) }><FiPlus/></button>
}



</div>
  )
}

export default Social 
