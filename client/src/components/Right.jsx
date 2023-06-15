import React, { useEffect, useState } from 'react'
import { Avatar, Box, TextField } from '@mui/material';
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
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { getUsername } from '../store/usernameSlice';
import { getName } from '../store/nameSlice';
import { getBio } from '../store/bioSlice';
import { getSocials } from '../store/socialSlice';


const Right = () => {
  const [value, setvalue] = useState(1);
  const [acc, setacc] = useState("facebook");
  const [open, setOpen] = useState(false);
  const [LinkModal, setLinkModal] = useState(false);
  const [link, setLink] = useState("");
  const [UrlLink, setUrlLink] = useState("");
  const [type, setType] = useState("");
  const [username, setusername] = useState("");
  const [name, setname] = useState("")
  const [bio, setbio] = useState("")
  const [title, settitle] = useState("")

  const socialVar = useSelector(state => state.social)
  const usernameVar = useSelector(state => state.username)
  const nameVar = useSelector(state => state.name)
  const bioVar = useSelector(state => state.bio)
  const socials = socialVar.socials;
  const currUsername = usernameVar.username;
  const currName = nameVar.name;
  const currBio = bioVar.bio;

  localStorage.setItem("userData", JSON.stringify({
    currUsername,
    currName,
    currBio
  }
  ))

  const email = localStorage.getItem("email")
  const localUsername = localStorage.getItem("username")

  // console.log(email)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsername(email));
    dispatch(getName(email));
    dispatch(getBio(email));

    setusername(localStorage.getItem("username"))
    let userData = localStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData)
      setusername(userData.currUsername)
      setname(userData.currName)
      setbio(userData.currBio)
    }





    console.log(currUsername, currName, currBio)
  }, [currUsername, currName, currBio])
  // console.log(acc)



  const handleChange = (event, newVal) => {
    setvalue(newVal)
  }
  const handleInputChange = (event) => {
    setLink(event.target.value)
  }
  const handleLinkInputChange = (event) => {
    setUrlLink(event.target.value)
  } 
  const handleTitleInputChange = (event) => {
    settitle(event.target.value)
  }
  const handleUsernameInputChange = (event) => {
    setusername(event.target.value)
  }
  const handleNameInputChange = (event) => {
    setname(event.target.value)
  }
  const handleBioInputChange = (event) => {
    setbio(event.target.value)
  }

  
  const handleDataSubmit = (e) => {
    e.preventDefault();
    handleAddUsername(email, username);
    handleAddName(email, name);
    handleAddBio(email, bio);
  }
  const handleDispatch = async (email, link) => {
    console.log(email, link, acc)
    const { data } = await axios.post(process.env.REACT_APP_API + '/addsocial', {
      email,
      link,
      type: acc
    })
    console.log(data)
  }

  const handleAddlink = async (email, UrlLink, title) => {
    console.log(email, UrlLink, title)
    const { data } = await axios.post(process.env.REACT_APP_API + '/addlink', {
      email,
      link: UrlLink,
      title
    })
    console.log(data)
  }
  const handleAddUsername = async (email, username) => {
    console.log(email, username)
    const { data } = await axios.post(process.env.REACT_APP_API + '/addusername', {
      email,
      username_from_body: username
    })
    if (data.status === 200) {
      localStorage.setItem("username", username)
    }
    console.log(data)
  }
  const handleAddName = async (email, name) => {
    console.log(email, name)
    const { data } = await axios.post(process.env.REACT_APP_API + '/addname', {
      email,
      name_from_body: name
    })
    console.log(data)
  }
  const handleAddBio = async (email, bio) => {
    console.log(email, bio)
    const { data } = await axios.post(process.env.REACT_APP_API + '/addbio', {
      email,
      bio_from_body: bio
    })
    console.log(data)
  }

  
  // const handleAdd = (e) => {

  //   setacc(e.target.value)
   
  //   setOpen(true)

  // }
  

  return (
    <div className='flex-1' >
      <Tabs size='lg' onChange={handleChange} aria-label="Plain tabs" defaultValue={value} sx={{ color: "white", backgroundColor: "#161a23" }} >

        <TabList color="primary" variant="plain" sx={{ backgroundColor: "#222430" }}>

          <Tab label="Bio" value={1} variant={value === 1 ? 'solid' : 'plain'}
            color={value === 1 ? 'info' : 'info'} sx={{ fontSize: "20px" }}  >Bio</Tab>
          <Tab label="Links" value={2} variant={value === 2 ? 'solid' : 'plain'}
            color={value === 2 ? 'info' : 'info'} sx={{ fontSize: "20px" }} >Links</Tab>
          <Tab label="Appearance" value={3} variant={value === 3 ? 'solid' : 'plain'}
            color={value === 3 ? 'info' : 'info'} sx={{ fontSize: "20px" }} >Appearance</Tab>

        </TabList>
        <TabPanel value={1}    >
          <div className='p-5 rounded-xl rounded-t-none bg-[#222430] '>

            <div className=' flex justify-center' >

              <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" style={{ width: '80px', height: "80px" }} />
            </div>
            <div className=' flex justify-center gap-4 flex-col' >
              <div className='flex justify-start gap-4  mt-8 '>

                <TextField id="filled-basic" value={username} onChange={(e) => handleUsernameInputChange(e)} label="Username" variant="filled" placeholder='Choose a Username' required fullWidth color="secondary" sx={{ input: { color: 'white' }, label: { color: "gray" } }} />
                <TextField id="filled-basic" value={name} onChange={(e) => handleNameInputChange(e)} label="Name" variant="filled" placeholder='Full Name' fullWidth color="secondary" sx={{ input: { color: 'white' }, label: { color: "gray" } }} />

              </div>
              <div className='mt-1'>

                <TextField id="filled-basic" value={bio} onChange={(e) => handleBioInputChange(e)} label="Description" variant="filled" placeholder='Description' fullWidth color="secondary" sx={{ input: { color: 'white' }, label: { color: "gray" } }} />
              </div>
              <button className=' bg-[#6d42b9] rounded-xl py-2 px-4 w-fit self-center' onClick={(e) => handleDataSubmit(e)} >
                Save
              </button>
            </div>

            <div>
              <div className='flex justify-center mt-4 flex-col bg-[#202229] rounded-2xl p-2'>

                <h1 className=' self-start m-2 mb-2 p-2'>Add Social Profiles</h1>

                <Social setacc={setacc} setOpen={setOpen} social={"instagram"} pic={Instagram} />
                <Social setacc={setacc} setOpen={setOpen} social={"facebook"} pic={Facebook} />
                <Social setacc={setacc} setOpen={setOpen} social={"youtube"} pic={Youtube} />
                <Social setacc={setacc} setOpen={setOpen} social={"snapchat"} pic={Snapchat} />
                <Social setacc={setacc} setOpen={setOpen} social={"gmail"} pic={Gmail} />
                <Social setacc={setacc} setOpen={setOpen} social={"linkedin"} pic={Linkedin} />
                <Social setacc={setacc} setOpen={setOpen} social={"twitter"} pic={Twitter} />
                <Social setacc={setacc} setOpen={setOpen} social={"pinterest"} pic={Pinterest} />
                <Social setacc={setacc} setOpen={setOpen} social={"telegram"} pic={Telegram} />
                <Social setacc={setacc} setOpen={setOpen} social={"twitch"} pic={Twitch} />
                <Social setacc={setacc} setOpen={setOpen} social={"behance"} pic={Behance} />
                <Social setacc={setacc} setOpen={setOpen} social={"reddit"} pic={Reddit} />
                <Social setacc={setacc} setOpen={setOpen} social={"web"} pic={Web} />
              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel value={2}>
          <Links setLinkModal={setLinkModal} />
        </TabPanel>
        <TabPanel value={3}>
          <div >
            <div className='flex flex-start mt-2'>

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
              // console.log(link);
              // console.log(acc);
              // console.log(email);
              handleDispatch(email, link);
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input autoFocus required value={link} onChange={(e) => handleInputChange(e)} />
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
              handleAddlink(email, UrlLink, title);
              setLinkModal(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input autoFocus required value={title} onChange={(e) => handleTitleInputChange(e)} />
              </FormControl>
              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input required value={UrlLink} onChange={(e) => handleLinkInputChange(e)} />
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
