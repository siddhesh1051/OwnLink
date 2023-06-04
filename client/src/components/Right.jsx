import React, { useState } from 'react'
import { Avatar, Box, Tab, Tabs, TextField } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import "../../src/App.css"
import Instagram from './icons/instagram.png'
import Youtube from './icons/youtube.png'
import Facebook from './icons/facebook.png'
import Twitter from './icons/twitter.png'
import Reddit from './icons/reddit.png'
import Telegram from './icons/telegram.png'
import Website from './icons/web.png'
import Linkedin from './icons/linkedin.png'
import Pinterest from './icons/pinterest.png'
import Snapchat from './icons/snapchat.png'
import Twitch from './icons/twitch.png'

import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Social from './Social';

const Right = () => {
  const [value, setvalue] = useState('1');
  const [acc, setacc] = useState("Facebook");
  const [open, setOpen] = useState(false);
  const handleChange = (event, newVal) => {
    setvalue(newVal)
  }
  const handleAdd = (e) => {
    setacc(e.target.value)
    setOpen(true)

  }

  

  return (
    <div className='flex-1 ' >


      <TabContext value={value}>

        <TabList onChange={handleChange} aria-label="lab API tabs example" textColor='[white]' indicatorColor='secondary'>

          <Tab label="Bio" value="1" />
          <Tab label="Links" value="2" />
          <Tab label="Appearance" value="3" />

        </TabList>
        <TabPanel value="1">
          <div className='p-5 rounded-xl bg-[#222430]'>

            <div className=' flex justify-center' >

              <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" />
            </div>
            <div className=' flex justify-center gap-4 flex-col' >
              <div className='flex justify-start gap-4  mt-8 '>

                <TextField id="filled-basic" label="Username" variant="filled" placeholder='Choose a Username' fullWidth color="secondary" sx={{ input: { color: 'white' } }} />
                <TextField id="filled-basic" label="Name" variant="filled" placeholder='Full Name' fullWidth />

              </div>
              <div className='mt-4'>

                <TextField id="filled-basic" label="Description" variant="filled" placeholder='Description' fullWidth />
              </div>
            </div>

            <div>
              <div className='flex justify-center mt-4 flex-col bg-[#2e2e35] rounded-lg p-2'>

                <h1 className=' self-start m-2 mb-2 p-2'>Add Social Profiles</h1>

                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                <Social handleAdd={handleAdd} social={"Facebook"} pic = {Facebook}/>
                <Social handleAdd={handleAdd} social={"Youtube"} pic = {Youtube}/>
                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                <Social handleAdd={handleAdd} social={"Instagram"} pic = {Instagram}/>
                
               
                

              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>

      </TabContext>
     

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
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input autoFocus required />
              </FormControl>
              
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      
    </div>
    
  );
}
export default Right
