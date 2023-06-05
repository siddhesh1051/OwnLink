import { Button, IconButton } from '@mui/joy'
import React from 'react'

const LinkDiv = () => {
  return (
    <div className='flex justify-between items-center px-2 py-3 bg-zinc-800 rounded-md mt-2' >
      <div>
        Link
      </div>
      <div>
        <Button color='neutral' size='sm' variant='solid' sx={{marginRight:'10px '}}  >Edit</Button>
        <Button color='danger' size='sm' variant='solid' >Delete</Button>




      </div>
    </div>
  )
}

export default LinkDiv
