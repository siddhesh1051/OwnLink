import React,{useState} from 'react'
import BgImage from './bgImage';
import bg1 from './img/bg1.png'
import GradientComp from './GradientComp';
import SolidColor from './SolidColor';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const Appearence = () => {

    const [selected, setSelected] = useState("");
    const email = localStorage.getItem('email');

    const handleSelect = async (e,bg) => {
      e.preventDefault();
      toast.promise(
        axios.post(process.env.REACT_APP_API + `/addbg`, {
            email,
            bg: bg
        }),
        {
          loading: 'Saving...',
          success: <b>Background Image Changed</b>,
          error: <b>Something Went Wrong !!</b>,
        }
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


              <div className='w-[150px] h-[266px]  cursor-pointer flex justify-center max-w-[160px] min-w-[120px] items-center rounded-[14px] bg-neutral-700 p-[16px] border-[transparent]"'>
                Upload Image
                <input type="file" className="hidden" />

              </div>
            
                {
                    backgroundimages.map((item) => (
                        <BgImage bg={item.image} setSelected={setSelected} selected={selected} handleSelect={handleSelect} />
                    ))
                }

            </div>
            <div className='flex flex-start'>

              <p className=' font-light text-sm text-gray-400 my-4 '>  or Choose a Gradient</p>
            </div>
            <div className='flex gap-5 flex-wrap'>
              <GradientComp />
              <GradientComp />
              <GradientComp />
              <GradientComp />
              <GradientComp />
              <GradientComp />
              <GradientComp />
            </div>

            <div className='flex flex-start'>

              <p className=' font-light text-sm text-gray-400 my-4 '>  or Choose a Solid Colour</p>
            </div>


            <div className='flex gap-5 flex-wrap'>
              <SolidColor />
            </div>
          </div>
  )
}

export default Appearence
