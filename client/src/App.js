import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Authentication from './components/Authentication';
import Home from './components/Home';
import Fullscreen from './components/Fullscreen';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Fullscreen_mobile from './components/Fullscreen_mobile';
import  { Toaster } from 'react-hot-toast';
import ReactGA from 'react-ga4'
import LandingPage from './components/LandingPage/LandingPage';
import Orders from './components/Orders';

const TRACKING_ID = 'G-EH75TZQPC6';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");
  
function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [user, setuser] = useState("")
  const username = localStorage.getItem("username");
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {

    
    const path = window.location.pathname;
    
    const username = path.substring(1); // Remove the leading '/'
  
    if (path!== "/"+username) {
      verifyUser();
    }
    if(path==="/"){
      verifyUser();
    }

  }, []);
    const verifyUser = async () => {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined ) {
          navigate("/routes/welcome");

      }

       else {
        

      const { data } = await axios.post(
        process.env.REACT_APP_API,
        { token: localStorage.getItem("token") },

      )
      // console.log(data.user)


      if (!data.status) {
        localStorage.removeItem("token");
        navigate("/routes/welcome");
        console.log(data.user)
      } else
        setuser(data.user)
    }

    };
  
  return (
    <div className="App">
      <Toaster/>



      <Routes>
        <Route path="/routes/auth" element={<Authentication />} />
        <Route path="/routes/welcome" element={<LandingPage />} />
        <Route path="/routes/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
        {
          isMobile?
          <Route path="/:username" element={<Fullscreen_mobile />} />
          :
          <Route path="/:username" element={<Fullscreen />} />
        }

      </Routes>



      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>


  );
}

export default App;
