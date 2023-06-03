import { ToastContainer } from 'react-toastify';
import './App.css';
import Authentication from './components/Authentication';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';

function App() {
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
