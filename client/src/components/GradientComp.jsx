import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBg } from '../store/bgSlice';



const GradientComp = ({gradColors,handleSelectGradient,selected}) => {
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const bgVar = useSelector(state => state.bg?.bg)


 
  useEffect(() => {
    dispatch(getBg(email))
   
  }, [selected]) 
  
  

var gradStyle ={
  backgroundImage: `${gradColors}`,

  backgroundSize: 'cover',
}

  return (
    <div className={`${gradColors===bgVar?'border-[3px]':null} + w-[150px] h-[266px] rounded-[14px] cursor-pointer flex justify-center items-center duration-300 ease-in-out transform hover:scale-105 hover:border-[1px] hover:border-white hover:shadow-lg   `} style={gradStyle} onClick={(e)=>handleSelectGradient(e,gradColors)}>
            </div>
  )
}

export default GradientComp
