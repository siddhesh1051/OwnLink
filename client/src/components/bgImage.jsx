import React from 'react'

const bgImage = ({bg,selected,setSelected,handleSelect}) => {


  return (
    <div className={`${selected===bg?'border-[3px]':null} + w-[150px] h-[266px] rounded-[14px] cursor-pointer flex justify-center items-center duration-300 ease-in-out transform hover:scale-105 hover:border-[1px] hover:border-white hover:shadow-lg   `} >

                <img src={bg} className='rounded-[14px] '  alt="" onClick={(e)=>handleSelect(e,bg)} />
          </div>
  )
}

export default bgImage
