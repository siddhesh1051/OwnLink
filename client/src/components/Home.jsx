import React from 'react'
import Left from './Left'
import Right from './Right'

const Home = () => {
    return (
        <>
            <div className='flex flex-row gap-2  w-full h-full bg-[#161a23] text-white'>

                <Left />
                <Right />
            </div>
        </>
    )
}

export default Home
