import React from 'react'

const Social = ({ handleAdd, social, pic }) => {
  return (
    <div className='flex justify-between w-full items-center  py-2 px-4'>
      <p className='flex'><img src={pic} alt="" className='mr-4' /> {social}</p>
      <button className='px-2 py-1 bg-[#34353e] rounded-lg' value={social} onClick={(e) => { handleAdd(e) }}>Add</button>
    </div>
  )
}

export default Social
