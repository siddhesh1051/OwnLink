import React, { useState, forwardRef, useEffect } from "react";
import Screen from "./Screen";
import "../../src/App.css";
import { BiLinkExternal } from "react-icons/bi";
import { LuCopy, LuCheck, LuArrowDown } from "react-icons/lu";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "@mui/joy/Modal/Modal";
import ModalDialog from "@mui/joy/ModalDialog/ModalDialog";
import Typography from "@mui/joy/Typography/Typography";
import { saveAs } from "file-saver";
import TiltCard from "./TiltCard";
import ModalClose from "@mui/joy/ModalClose";
import confetti from "canvas-confetti";
import Logo from "./img/logo.png";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../store/usernameSlice";

const Left = ({ handleCustomize, update }, ref) => {
  const [clicked, setclicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const username = useSelector((state) => state.username.username);
  const dispatch = useDispatch();

  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const laodscript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handleRazorpay = async (docref) => {
    const res = await laodscript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_D4QKUfd4DWNLdV",
      amount: 999 * 100,
      currency: "INR",
      name: "Ownlink NFC Card Payment",
      description: "NFC Card Payment",
      image: Logo,
      handler: function (response) {
        submitOrder(response);
      },
      prefill: {
        name: username,
        email: "test@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "#31224E",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const submitOrder = async (response) => {
    const { razorpay_payment_id } = response;
    const orderData = {
      name: "NFC Card",
      razorpay_payment_id,
      amount: 999,
      order_id: `OID${Date.now() * 10}`,
      // razorpay_order_id,
      // razorpay_signature,
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/submitOrder`,
      {
        email,
        orderData,
      }
    );

    if (data.success === true) {
      handleOrderSubmit();
    } else {
      toast.error("Payment Failed");
    }
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.9 },
      zIndex: 10000,
    });
  };
  const handleOrderSubmit = async (event) => {
    // event.preventDefault();
    handleConfetti();
    toast.success("Order Placed Successfully");

    setTimeout(() => {
      navigate("/routes/orders");
      setCardOpen(false);
    }, 1500);
  };

  const handleQrOpen = () => {
    setOpen(true);
  };
  const handleCardOpen = () => {
    setCardOpen(true);
  };
  const handleDownload = (link) => {
    let url = link;
    saveAs(url, username + ".png");
  };

  useEffect(() => {
    dispatch(getUsername(email));
  }, [email]);

  const profileLink = `${process.env.REACT_APP_CLIENT_API}/${username}`;
  return (
    <motion.div
      // animate={{ x: 0 }}
      // initial={{ x: -1000 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col justify-start p-2 pl-0"
    >
      <div className="flex lg:justify-between lg:flex-row flex-col lg:items-start items-center gap-2 lg:gap-0   ">
        <Sidebar
          update={update}
          handleQrOpen={handleQrOpen}
          handleCardOpen={handleCardOpen}
          username={username}
        />

        <div className="mt-2 mr-1">
          {clicked ? (
            <LuCheck className="inline text-2xl mr-3 text-violet-400 duration-300   " />
          ) : (
            username !== null && (
              <LuCopy
                className="inline text-2xl mr-3 text-violet-400 underline cursor-pointer duration-300 "
                onClick={() => {
                  navigator.clipboard.writeText(profileLink);
                  setclicked(true);
                  toast.success("Ownlink Copied to clipboard");
                  setTimeout(() => {
                    setclicked(false);
                  }, 2500);
                }}
              />
            )
          )}
          {username !== null && (
            <a
              href={profileLink}
              target="_blank"
              className=" text-violet-400 underline underline-offset-4"
              rel="noopener noreferrer"
            >
              {" "}
              {" " + `${profileLink}` + " "}{" "}
              <BiLinkExternal className="inline place-self-center underline underline-offset-4 lg:text-xl text-lg" />{" "}
            </a>
          )}

          {username !== null && <p className="text-gray-400">or</p>}
          {username !== null && (
            <div
              className=" text-violet-400 underline underline-offset-4 cursor-pointer"
              onClick={handleQrOpen}
            >
              Generate a QR code
            </div>
          )}
        </div>

        <div
          className="lg:hidden flex justify-center items-center bg-[#3c3c44] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full w-48 h-12 mt-4 active:scale-95 duration-200"
          onClick={handleCustomize}
        >
          Customize <LuArrowDown className="inline ml-2 text-lg" />
        </div>
      </div>

      <div className="iphone-x scale-75 " ref={ref}>
        <Screen update={update} />
        <i className="speaker">Speaker</i>
        <b className="camera">Camera</b>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 700,
            padding: 8,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 6,
            paddingBottom: 4,
            backgroundColor: "#07000e",
            borderRadius: 10,
            border: "1px solid #31224E",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              fontFamily: "Poppins, sans-serif",
            }}
            id="basic-modal-dialog-title"
            component="h2"
          >
            Your Profile QR Code
          </Typography>
          <Typography id="basic-modal-dialog-description" sx={{ mt: 2 }}>
            {loading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-[100px] w-[100px] border-t-2 border-b-2 border-violet-500"></div>
              </div>
            )}

            <motion.img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${profileLink}&bgcolor=7-0-14&color=240-216-255`}
              alt="qr"
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              onLoad={() => setLoading(false)}
              loading="lazy"
              className={`${loading ? "invisible" : "visible"}`}
            />

            <div className="flex justify-center items-center text-white font-semibold mt-8">
              <motion.button
                className="px-4 py-2 rounded-lg bg-primaryLight flex justify-center items-center text-center mt-2"
                onClick={() =>
                  handleDownload(
                    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${profileLink}&bgcolor=7-0-14&color=240-216-255`
                  )
                }
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Download QR
              </motion.button>
            </div>
          </Typography>
        </ModalDialog>
      </Modal>

      <Modal open={cardOpen} onClose={() => setCardOpen(false)}>
        <ModalDialog
          layout="fullscreen"
          variant="soft"
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          className="flex justify-center items-center bg-black bg-opacity-50"
          sx={{
            backgroundColor: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(15px)",
            padding: 2,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <ModalClose />
          <TiltCard
            update={update}
            handleCardOpen={handleCardOpen}
            username={username}
          />
          <motion.button
            className="px-6 py-3 rounded-lg bg-violet-700 flex justify-center items-center text-center mt-2 text-white text-xl font-semibold "
            onClick={handleRazorpay}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </ModalDialog>
      </Modal>
    </motion.div>
  );
};

export default forwardRef(Left);
