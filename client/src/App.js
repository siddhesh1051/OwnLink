import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Authentication from './components/Authentication';
import Home from './components/Home';
import { Route,Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [user, setuser] = useState("")
  useEffect(() => {
    const verifyUser = async () => {
      if (localStorage.getItem("token")===null || localStorage.getItem("token")===undefined) {
        navigate("/auth");
        
        
      } else {
        
        const { data } = await axios.post(
          process.env.REACT_APP_API,
          {token:localStorage.getItem("token")},
          
        )
        console.log(data.user)
        
        
        if (!data.status) {
          localStorage.removeItem("token"); 
           navigate("/auth");
          console.log(data.user)
        } else
        setuser(data.user)
      }
      
    };
    verifyUser();
  }, []);
  return (
    <div className="App">

    

    <Routes>
    <Route path="/auth" element={<Authentication />} />
    <Route path="/" element={<Home />} />
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
