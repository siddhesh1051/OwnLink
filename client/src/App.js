import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Authentication from './components/Authentication';
import Home from './components/Home';
import Screen from './components/Screen';
import Fullscreen from './components/Fullscreen';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Fullscreen_mobile from './components/Fullscreen_mobile';

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
    const verifyUser = async () => {
      // if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined || path) {
      //  navigate("/routes/auth");
      // }

      //  else {

      const { data } = await axios.post(
        process.env.REACT_APP_API,
        { token: localStorage.getItem("token") },

      )
      // console.log(data.user)


      if (!data.status) {
        localStorage.removeItem("token");
        navigate("/routes/auth");
        console.log(data.user)
      } else
        setuser(data.user)
    }

    // };
    verifyUser();
  }, []);
  return (
    <div className="App">



      <Routes>
        <Route path="/routes/auth" element={<Authentication />} />
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
