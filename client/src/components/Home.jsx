import React from 'react'
import Left from './Left'
import Right from './Right'

const Home = () => {
    return (
        <>
            <div className='flex flex-row gap-2  w-screen h-screen '>

                <Left />
                <Right />
            </div>
        </>
    )
}

export default Home
