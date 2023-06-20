import React,{useEffect, useState} from 'react'
import BgImage from './bgImage';
import bg1 from './img/bg1.png'
import GradientComp from './GradientComp';
import SolidColor from './SolidColor';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getBg } from '../store/bgSlice';
import { LuArrowDownRight, LuArrowRight } from 'react-icons/lu';


const Appearence = () => {

    const [selected, setSelected] = useState("");
    const email = localStorage.getItem('email');
    const dispatch = useDispatch();
    const bgVar = useSelector(state => state.bg?.bg)
  
  
   
    useEffect(() => {
      dispatch(getBg(email))
     
    }, [selected]) 

    const handleSelect = async (e,bg) => {
      e.preventDefault();
      toast.promise(
        axios.post(process.env.REACT_APP_API + `/addbg`, {
            email,
            bg: bg
        }),
        {
          loading: 'Saving...',
          success:"Background Image Changed",
          error: "Something Went Wrong !!",
        },
        setSelected(bg)
      )
        .catch((err) => console.log(err))
    }

    const handleSelectGradient = async (e,gradColors) => {
      e.preventDefault();
      toast.promise(
        axios.post(process.env.REACT_APP_API + `/addbg`, {
            email,
            bg: gradColors
        }),
        {
          loading: 'Saving...',
          success:"Background Image Changed",
          error: "Something Went Wrong !!",
        },
        setSelected(gradColors)
      )
        .catch((err) => console.log(err))
    }

    const handleBgupload = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      formData.append('upload_preset', 'ownlink')
      toast.promise(
        axios.post('https://api.cloudinary.com/v1_1/dvdox1fzz/image/upload', formData)
        .then((res) => {
          axios.post(process.env.REACT_APP_API + `/addbg`, {
            email,
            bg: res.data.secure_url
        })
        .then((res) => {
          setSelected(res.data.bg)
        })
        .catch((err) => console.log(err))
        }),
        {
          loading: 'Saving...',
          success:"Background Image Changed",
          error: "Something Went Wrong !!",
        },
      )
        .catch((err) => console.log(err))
    }


   
    const backgroundimages = [ 
        {id: 1, image: "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/ozvno1ml5j6pq1qccbxs.jpg"},
        {id: 2, image: "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116971/Background%20Images/zrlojuzmf4fqxhrswgui.jpg"},
        {id: 3, image: "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116970/Background%20Images/ghvebcokrdjht0lyejk2.jpg"},
        {id: 4, image: "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/hmjytjxxt27jjc0fcxxv.jpg"},
        {id: 5,  image:"https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116968/Background%20Images/fajehimpcme88o9ntvxg.jpg"},
        {id: 6,  image:"https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/wl6owfhurk5k402t2oxx.jpg"},
        {id: 7,  image:"https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/vt5mnuujdkydtwkddzns.jpg"},
        {id: 8,  image:"https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/dwkfbhkhcozqb0asrmsk.jpg"},
        {id: 9,  image:"https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116966/Background%20Images/pvq7wyq1x1pol7wsctv4.jpg"},
        {id: 10,  image:"https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/u41ak5wpagkwumtkfevo.jpg"},
    ]


  return (
    <div >
            <div className='flex flex-start mt-2'>

              <p className=' font-light text-sm text-gray-400 mb-4 '>  Choose a background image</p>
            </div>
            <div className='flex gap-5 flex-wrap'>

                <label htmlFor="bginput">

              <div className={`w-[150px] h-[266px]  cursor-pointer flex justify-center max-w-[160px] min-w-[120px] items-center rounded-[14px] bg-[#333333] p-[16px] border-[transparent] duration-300 ease-in-out transform hover:scale-105 hover:border-[1px] hover:border-white shadow-xl  `}>
                Upload Image
              </div>

                </label>

                <input type="file" id='bginput' hidden onChange={(e)=>{
                  handleBgupload(e)
                }} />
                
                
            
                {
                    backgroundimages.map((item) => (
                        <BgImage bg={item.image} setSelected={setSelected} selected={selected} handleSelect={handleSelect} />
                    ))
                }
                    <a className='flex justify-center items-center duration-200 cursor-pointer text-violet-400 mx-3' href='https://www.setaswall.com/1080x1920-wallpapers'  rel="noopener noreferrer" target='_blank'>

                <div className=' duration-200 cursor-pointer mr-1 hover:mr-3'>View More </div><LuArrowRight className='inline text-xl hover:ml-2 duration-200'/>
                    </a>

            </div>
            <div className='flex flex-start'>

              <p className=' font-light text-sm text-gray-400 my-4 '>  or Choose a Gradient</p>
            </div>
            <div className='flex gap-5 flex-wrap'>
              <GradientComp gradColors="linear-gradient(to right top, #742399, #1864d9)" handleSelectGradient={handleSelectGradient} />
              <GradientComp gradColors="linear-gradient(to right top, #5e215a, #745635)" handleSelectGradient={handleSelectGradient}/>
              <GradientComp gradColors="linear-gradient(to right top, #090a0b, #d2ddff)" handleSelectGradient={handleSelectGradient}/>
              <GradientComp gradColors="linear-gradient(to right top, #226b25, #42256d)" handleSelectGradient={handleSelectGradient}/>
            </div>

            <div className='flex flex-start'>

              <p className=' font-light text-sm text-gray-400 my-4 '>  or Choose a Solid Colour</p>
            </div>


            <div className='flex gap-5 flex-wrap'>
              <SolidColor gradColors="linear-gradient(to right top, #DF531D, #DF531D)" handleSelectGradient={handleSelectGradient}/>
              <SolidColor gradColors="linear-gradient(to right top, #1D831C, #1D831C)" handleSelectGradient={handleSelectGradient}/>
              <SolidColor gradColors="linear-gradient(to right top, #B64294, #B64294)" handleSelectGradient={handleSelectGradient}/>
              <SolidColor gradColors="linear-gradient(to right top, #3C3AB1, #3C3AB1)" handleSelectGradient={handleSelectGradient}/>
            </div>
          </div>
  )
}

export default Appearence
