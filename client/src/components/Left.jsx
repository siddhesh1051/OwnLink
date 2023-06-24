import React, { useState, useRef, forwardRef, useEffect } from 'react'
import Screen from './Screen'
import '../../src/App.css'
import { BiLinkExternal } from 'react-icons/bi'
import { LuCopy, LuCheck, LuLogOut, LuArrowDown } from 'react-icons/lu'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Modal from '@mui/joy/Modal/Modal'
import ModalDialog from '@mui/joy/ModalDialog/ModalDialog'
import Typography from '@mui/joy/Typography/Typography'
import { saveAs } from "file-saver";



const Left = ({ handleCustomize, update }, ref) => {

  const [clicked, setclicked] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("userData");
    toast.success("Logged out Successfully");
    navigate("/routes/auth");
  };

  const handleQrOpen = () => {
    setOpen(true)
  }
  const handleDownload = (link) => {
    let url = link
    saveAs(url, username + ".png");
  }
  let username = localStorage.getItem("username")

    useEffect(() => {
      username = localStorage.getItem("username")


    }, [update])
    

  const profileLink = `${process.env.REACT_APP_CLIENT_API}/${username}`
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -1000 }}
      transition={{ duration: 0.6 }}

      className='flex-1 flex flex-col  justify-start p-2'>
      <div className='flex lg:justify-between lg:flex-row flex-col lg:items-start items-center gap-2 lg:gap-0  '>

        <button className='px-4 py-2 ml-3mt-2 bg-violet-600 text-white rounded-lg hover:bg-violet-800 active:scale-95 duration-300 text-lg' onClick={logOut}>Logout <LuLogOut className='inline lg:text-xl text-lg ml-1 text-white' /></button>
        <div className='mt-2 mr-1'>

          {clicked ? <LuCheck className='inline text-2xl mr-3 text-violet-400 duration-300   ' /> :

            username !== null && <LuCopy className='inline text-2xl mr-3 text-violet-400 underline cursor-pointer duration-300 ' onClick={() => {
              navigator.clipboard.writeText(profileLink); setclicked(true);
              toast.success("Ownlink Copied to clipboard");
              setTimeout(() => {
                setclicked(false)
              }
                , 2500);

            }} />
          }
          {
            username !== null &&
            <a href={profileLink} target="_blank" className=' text-violet-400 underline underline-offset-4' rel="noopener noreferrer">   {" " + `${profileLink}` + " "} <BiLinkExternal className='inline place-self-center underline underline-offset-4 lg:text-xl text-lg' />  </a>
          }

          {
            username !== null &&
            <p className='text-gray-400'>or</p>
          }
          {
            username !== null &&
            <div className=' text-violet-400 underline underline-offset-4 cursor-pointer' onClick={handleQrOpen} >
              Generate a QR code
            </div>
          }
        </div>

        <div className='lg:hidden flex justify-center items-center bg-[#3c3c44] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full w-48 h-12 mt-4 active:scale-95 duration-200' onClick={handleCustomize}  >
          Customize <LuArrowDown className='inline ml-2 text-lg' />
        </div>
      </div>

      <div className="iphone-x scale-75 " ref={ref} >

        <Screen update={update} />
        <i className='speaker'>Speaker</i>
        <b className='camera'>Camera</b>


      </div>

      <Modal open={open} onClose={() => setOpen(false)} >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500, padding: 2, margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 6, paddingBottom: 4 }}
        >

          <Typography id="basic-modal-dialog-title" component="h2">
            Your Profile QR Code
          </Typography>
          <Typography id="basic-modal-dialog-description" sx={{ mt: 2 }}

          >
            <motion.img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${profileLink}`} alt="qr"
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.5 }}

            />
            <div className='flex justify-center items-center text-black mt-5'>

              <motion.button className='px-4 py-2 rounded-lg bg-violet-500 flex justify-center items-center text-center mt-2' onClick={() => handleDownload("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${profileLink}")}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

              >Download QR</motion.button>
            </div>
          </Typography>


        </ModalDialog>

      </Modal>






    </motion.div>
  )
}

export default forwardRef(Left)
