import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBg } from './../store/bgSlice';

const BgImage = ({bg,selected,setSelected,handleSelect}) => {
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const bgVar = useSelector(state => state.bg?.bg)


 
  useEffect(() => {
    dispatch(getBg(email))
   
  }, [selected]) 
  


  return (
    <div className={`${bg===bgVar?'border-[3px]':null} + w-[150px] h-[266px] rounded-[14px] cursor-pointer flex justify-center items-center duration-300 ease-in-out transform hover:scale-105 hover:border-[1px] hover:border-white hover:shadow-lg   `} >

                <img src={bg} className='rounded-[14px] '  alt="" onClick={(e)=>handleSelect(e,bg)} />
          </div>
  )
}

export default BgImage
