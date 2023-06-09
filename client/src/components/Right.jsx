import React, { useState } from 'react'
import { Avatar, Box, TextField } from '@mui/material';
// import { TabPanel, TabList, TabContext } from '@mui/lab';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import "../../src/App.css"
import Instagram from './icons/instagram.png'
import Youtube from './icons/youtube.png'
import Facebook from './icons/facebook.png'
import Twitter from './icons/twitter.png'
import Reddit from './icons/reddit.png'
import Telegram from './icons/telegram.png'
import Web from './icons/web.png'
import Linkedin from './icons/linkedin.png'
import Pinterest from './icons/pinterest.png'
import Snapchat from './icons/snapchat.png'
import Twitch from './icons/twitch.png'
import Gmail from './icons/gmail.png'
import Behance from './icons/behance.png'
import bg1 from './img/bg1.png'
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Social from './Social';
import Links from './Links';
import BgImage from './bgImage';
import SolidColor from './SolidColor';
import GradientComp from './GradientComp'
import {add,remove, setSocials} from '../store/socialSlice'
import {useDispatch, useSelector} from 'react-redux'


const Right = () => {
  const [value, setvalue] = useState(1);
  const [acc, setacc] = useState("facebook");
  const [open, setOpen] = useState(false);
  const [LinkModal, setLinkModal] = useState(false);
  const [link, setLink] = useState("");
  const [type, setType] = useState("");

  const socialVar = useSelector (state => state.social)
  const socials = socialVar.socials;
  // console.log(socials)

  const email = "test@gmail.co"

  const dispatch = useDispatch()

  const handleChange = (event, newVal) => {
    setvalue(newVal)
  }
  const handleInputChange = (event) => {
    setLink(event.target.value)
  }
  const handleAdd = (e) => {
    setacc(e.target.value)
    

    console.log(acc);
    setType(e.target.value);
    console.log(type);
    setOpen(true)
    

  }



  return (
    <div className='flex-1' >


      <Tabs size='lg' onChange={handleChange}  aria-label="Plain tabs" defaultValue={value} sx={{color:"white", backgroundColor:"#161a23"}} >

        <TabList color="primary" variant="plain" sx={{backgroundColor:"#222430"}}>

          <Tab label="Bio" value={1} variant={value === 1 ? 'solid' : 'plain'}
            color={value === 1 ? 'info' : 'info'} sx={{fontSize:"20px"}}  >Bio</Tab>
          <Tab label="Links" value={2} variant={value === 2? 'solid' : 'plain'}
            color={value === 2 ? 'info' : 'info'} sx={{fontSize:"20px"}} >Links</Tab>
          <Tab label="Appearance" value={3} variant={value === 3 ? 'solid' : 'plain'}
            color={value === 3 ? 'info' : 'info'} sx={{fontSize:"20px"}} >Appearance</Tab>

        </TabList>
        <TabPanel value={1}    >
          <div className='p-5 rounded-xl rounded-t-none bg-[#222430] '>

            <div className=' flex justify-center' >

              <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" style={{width:'80px', height:"80px"}} />
            </div>
            <div className=' flex justify-center gap-4 flex-col' >
              <div className='flex justify-start gap-4  mt-8 '>

                <TextField id="filled-basic" label="Username" variant="filled" placeholder='Choose a Username' fullWidth  color="secondary" sx={{ input: { color: 'white'} , label:{color: "gray"}  }} />
                <TextField id="filled-basic" label="Name" variant="filled" placeholder='Full Name' fullWidth color="secondary" sx={{ input: { color: 'white'} , label:{color: "gray"}  }} />

              </div>
              <div className='mt-1'>

                <TextField id="filled-basic" label="Description" variant="filled" placeholder='Description' fullWidth color="secondary" sx={{ input: { color: 'white'} , label:{color: "gray"}  }} />
              </div>
            </div>

            <div>
              <div className='flex justify-center mt-4 flex-col bg-[#202229] rounded-2xl p-2'>

                <h1 className=' self-start m-2 mb-2 p-2'>Add Social Profiles</h1>

                <Social handleAdd={handleAdd} social={"instagram"} pic={Instagram} />
                <Social handleAdd={handleAdd} social={"facebook"} pic={Facebook} />
                <Social handleAdd={handleAdd} social={"youtube"} pic={Youtube} />
                <Social handleAdd={handleAdd} social={"snapchat"} pic={Snapchat} />
                <Social handleAdd={handleAdd} social={"gmail"} pic={Gmail} />
                <Social handleAdd={handleAdd} social={"linkedin"} pic={Linkedin} />
                <Social handleAdd={handleAdd} social={"twitter"} pic={Twitter} />
                <Social handleAdd={handleAdd} social={"pinterest"} pic={Pinterest} />
                <Social handleAdd={handleAdd} social={"telegram"} pic={Telegram} />
                <Social handleAdd={handleAdd} social={"twitch"} pic={Twitch} />
                <Social handleAdd={handleAdd} social={"behance"} pic={Behance} />
                <Social handleAdd={handleAdd} social={"reddit"} pic={Reddit} />
                <Social handleAdd={handleAdd} social={"web"} pic={Web} />




              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel value={2}>
          <Links setLinkModal={setLinkModal} />
        </TabPanel>
        <TabPanel value={3}>
          <div >
            <div className='flex flex-start'>

              <p className=' font-light text-sm text-gray-400 mb-4 '>  Choose a background image</p>
            </div>
            <div className='flex gap-5 flex-wrap'>


              <div className='w-[150px] h-[266px]  cursor-pointer flex justify-center max-w-[160px] min-w-[120px] items-center rounded-[14px] bg-neutral-700 p-[16px] border-[transparent]"'>
                Upload Image
                <input type="file" className="hidden" />

              </div>
              <BgImage bg={bg1} />
              <BgImage bg={bg1} />
              <BgImage bg={bg1} />
              <BgImage bg={bg1} />
              <BgImage bg={bg1} />
              <BgImage bg={bg1} />
              <BgImage bg={bg1} />





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
        </TabPanel>

      </Tabs>


      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            {acc}
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Enter {acc} username below
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(setSocials(email,link,type))
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input autoFocus required  value={link} onChange={(e)=>handleInputChange(e)} />
              </FormControl>

              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <Modal open={LinkModal} onClose={() => setLinkModal(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
         
          <Typography id="basic-modal-dialog-title" textColor="text.tertiary">
            Enter Details Below
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setLinkModal(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input autoFocus required />
              </FormControl>

              <Button type="submit">Add</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>


    </div>

  );
}
export default Right
