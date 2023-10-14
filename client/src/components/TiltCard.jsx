import React, { useEffect } from 'react'
import { Tilt } from 'react-tilt'


const TiltCard = ({setCardOpen, cardOpen,update,handleCardOpen}) => {


    let username = localStorage.getItem("username")

    useEffect(() => {
      username = localStorage.getItem("username")


    }, [update])


    const profileLink = `${process.env.REACT_APP_CLIENT_API}/${username}`


    return (
       
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <Tilt
                options={{
                    max: 45,
                    scale: 1.1,
                    speed: 600,
                }}
                className='bg-gradient-to-tr h-[250px] from-[#38275a] to-black border-2 border-[#4c3970] p-5 rounded-xl sm:w-[400px] w-full duration-300 flex justify-center items-center relative'
            >
            <div className='flex flex-col justify-center items-center gap-2'>

            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=54-38-87&data=${profileLink}`} alt="qr" className='w-[100px] h-[100px] '  />
            <p className='text-purple-500 font-[poppins]'>{username}</p>

            </div>
            <p className=' text-purple-900 absolute bottom-1 right-2 '>Ownlink &copy;</p>

            </Tilt>

        </div>

    )
}

export default TiltCard
