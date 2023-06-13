import { Button, IconButton } from '@mui/joy'
import React from 'react'

const LinkDiv = ({title,link}) => {
  return (
    <div className='flex justify-between items-center px-2 py-3 bg-[#202229] rounded-md mt-3' >
      <div className='flex flex-col justify-center items-start gap-2 ml-3 my-1'>
        <h1 className='text-xl'>{title}</h1>
        <p className=' text-sm'>{link}</p>
      </div>
      <div>
        <Button color='neutral' size='sm' variant='solid' sx={{marginRight:'10px '}}  >Edit</Button>
        <Button color='danger' size='sm' variant='solid' >Delete</Button>




      </div>
    </div>
  )
}

export default LinkDiv
