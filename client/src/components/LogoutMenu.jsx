import React, { useEffect, useState } from 'react'
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { LuLogOut } from 'react-icons/lu';
import TiltCard from './TiltCard';




const LogoutMenu = ({ update, handleQrOpen,handleCardOpen }) => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(null);
  let email = localStorage.getItem('email');
  let username = localStorage.getItem("username")
  // const [profilePic, setProfilePic] = useState("");


  // const getProfilePic = async () => {
  //   try{
  //     const {data} = await axios.get(`${process.env.REACT_APP_API}/profilepic/${email}`)
  //     setProfilePic(data.profilePic);

  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    username = localStorage.getItem("username")
    email = localStorage.getItem("email")


  }, [update])




  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("userData");
    toast.success("Logged out Successfully");
    navigate("/routes/auth");
  };

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", boxShadow: 'none' }} >
      <IconButton onClick={handleClick} sx={{
        backgroundColor: '#222430',
        transition: '0.3s',
        border: '1px solid #3A3D4F',
        marginTop: '7px',
        marginLeft: '7px',
        '&:hover': {
          backgroundColor: '#3A3D4F',
        },


      }} >
        <Avatar alt="Placeholder"
          style={{ cursor: "pointer" }} sx={{ width: 40, height: 40 }} />
      </IconButton>
      <Menu
        anchorEl={menuOpen}
        open={Boolean(menuOpen)}
        onClose={handleClose}
        variant='plain'
      >
        <MenuItem 
        sx={{ fontSize: '16px' }}>{email}</MenuItem>
        <MenuItem onClick={() => {
            username !== null ? handleQrOpen() : toast.error("Please Claim your username first")
          }
        } sx={{ fontSize: '16px' }}>My QR</MenuItem>
        <MenuItem onClick={() => {
            username !== null ? handleCardOpen() : toast.error("Please Claim your username first")
          }
        } sx={{ fontSize: '16px' }}>Order Card</MenuItem>

        <MenuItem onClick={logOut} sx={{ fontSize: '16px', color: 'red' }}>Logout <LuLogOut className='inline lg:text-md text-sm ml-2 text-red-500' /></MenuItem>
      </Menu>

    </div>
  )
}

export default LogoutMenu
