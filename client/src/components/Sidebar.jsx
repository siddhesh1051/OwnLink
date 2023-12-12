import React, { useEffect, useState } from 'react';
import './slider.css';
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { LuLogOut } from 'react-icons/lu';




const Siderbar = ({ update, handleQrOpen, handleCardOpen }) => {

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(null);
    let email = localStorage.getItem('email');
    let username = localStorage.getItem("username")

    useEffect(() => {
        username = localStorage.getItem("username")
        email = localStorage.getItem("email")


    }, [update])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        if (open) {
            // Disable scroll on body when the menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scroll on body when the menu is closed
            document.body.style.overflow = 'visible';
        }
    }, [open]);

    const isMobile = width <= 1023;
    console.log(isMobile)


    const isOpen = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    //lets start animation
    const item = {
        exit: {
            opacity: 0,
            width: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.6
            }
        }
    }

    // links operations
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
        <div className="sidemenu_container">
            <header>
                <div className="menu" onClick={isOpen}>
                    <FiMenu />
                </div>
            </header>
            <AnimatePresence>
                {
                    open && (
                        <motion.div className="menu_container"
                            variants={item}
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: isMobile ? "100vw" : "30vw", opacity: 1 }}
                            transition={{ duration: .7 }}
                            exit="exit"
                        >
                            <div className="btn_close" onClick={closeMenu}><FiX /></div>
                            <motion.a 
                                initial={{ x: -90, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .9 }}
                                exit={{
                                    opacity: 0,
                                    x: -90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: 0.6
                                    }
                                }}
                                onClick={() => navigate(`/`) }
                            >Home</motion.a>
                            <motion.a 
                                initial={{ x: -90, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .8 }}
                                exit={{
                                    opacity: 0,
                                    x: -90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }
                                }}
                                onClick={() => {
                                    username !== null ? handleQrOpen() : toast.error("Please Claim your username first")
                                  }
                                }
                            >My QR</motion.a>
                            <motion.a 
                                initial={{ x: -90, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .7 }}
                                exit={{
                                    opacity: 0,
                                    x: -90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .4
                                    }
                                }}
                                onClick={() => {
                                    username !== null ? handleCardOpen() : toast.error("Please Claim your username first")
                                  }
                                }
                            >NFC Card</motion.a>
                            <motion.a 
                                initial={{ x: -90, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .6 }}
                                exit={{
                                    opacity: 0,
                                    x: -90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .3
                                    }
                                }}
                                onClick={() => navigate(`/routes/orders`) }
                                
                            >My Orders</motion.a>
                            <motion.a 
                                initial={{ x: -90, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .5 }}
                                exit={{
                                    opacity: 0,
                                    x: -90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .2
                                    }
                                }}
                            >My Account</motion.a>
                            <motion.a 
                                initial={{ x: -90, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: .4 }}
                                exit={{
                                    opacity: 0,
                                    x: -90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .1
                                    }
                                }}
                                id='logout_btn'
                                onClick={logOut}
                            >Logout <LuLogOut className='inline text-3xl  ml-2 text-brown'/></motion.a>
                            
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default Siderbar
