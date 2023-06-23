import React, { useEffect } from 'react'
import { getBg } from '../store/bgSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const SolidColor = ({gradColors,handleSelectGradient,selected,index}) => {
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
           <motion.div 
           initial={{opacity:0 }}
           // animate={{  y: 0,opacity:1 }}
           transition={{
             delay:index*0.15,
             duration:0.3
                }}
                // whileHover={{scale:1.05}}
                // whileTap={{scale:0.95}}
                whileInView={{opacity:1}}
                viewport={{once:true}}

                className={`${gradColors===bgVar?'border-[3px]':null} + w-[150px] h-[266px] rounded-[14px] cursor-pointer flex justify-center items-center duration-300 ease-in-out transform hover:scale-105 hover:border-[1px] hover:border-white hover:shadow-lg active:scale-95 `} style={gradStyle} onClick={(e)=>handleSelectGradient(e,gradColors)}  >
          </motion.div>
  )
}

export default SolidColor
