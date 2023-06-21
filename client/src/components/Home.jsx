import React ,{useRef} from 'react'
import Left from './Left'
import Right from './Right'
import { LuArrowUp } from 'react-icons/lu';
import { ref } from 'yup';

const Home = () => {
    const ref = useRef(null);
    const previewRef = useRef(null);
    const handleCustomize = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    const handlePreview = () => {
        previewRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    
    return (
        <>
            <div className='flex lg:flex-row flex-col gap-2  w-full h-full bg-[#161a23] text-white'>

                <Left handleCustomize={handleCustomize} ref={previewRef} />
                <Right ref={ref} />
            </div>

                <div className='lg:hidden fixed right-3 bottom-3 flex justify-center items-center bg-[#3c3c44] rounded-full px-5 py-3 text-lg text-white shadow-[-4.0px_-8.0px_24.0px_rgba(0,0,0,0.68)]  active:scale-95 duration-150' onClick={handlePreview}>Preview <LuArrowUp className='ml-1 text-xl'/></div>
        </>
    )
}

export default Home
