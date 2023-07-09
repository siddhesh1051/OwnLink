import React, { useEffect } from 'react'
import "../../src/App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4'
import Sparkle from './img/sparkle.png'
import { useFormik } from 'formik'
import { validationSchema } from '../schema/index.jsx'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion';

const Login = ({ isNew, setisNew }) => {

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  }
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const onLogin = async (values, action) => {
    // console.log('Form data login', values);
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API + "/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      // console.log(data);

      const token = data.token;
      const user = data.user;

      localStorage.setItem('token', token);
      // console.log(user);

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          toast.success("Login Successfull")
          localStorage.setItem('email',user.email)
          navigate("/");
          window.location.reload();
        }
      }
    } catch (ex) {
     toast.error("Invalid Credentials",{

     })

    }

    // action.resetForm();
  }


  useEffect(() => {
   ReactGA.send("pageview");
  }, [])
  



  const { values, errors, touched, handleBlur, handleChange,action } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onLogin,



  })
  return (

    <>
      <form className='flex-1 flex justify-start items-start'>


        <div className='modal-left flex-1 flex flex-col gap-2 justify-start lg:items-start items-center'>
          <motion.img 
           initial={{ y:-20, opacity: 0 }}
           animate={{ y:0, opacity: 1}}
           transition={{
             delay: 0.1,
             duration: 0.3
           }}src={Sparkle} alt="" className=' w-24 h-24 ml-6' />

          <motion.h1 
          initial={{ y:-20, opacity: 0 }}
          animate={{ y:0, opacity: 1}}
          transition={{
            delay: 0.2,
            duration: 0.3
          }}
          className=' text-3xl font-medium text-black mx-8'>Get your <span className=' text-5xl font-bold text-black'>OwnLink</span></motion.h1>
          <motion.p 
          initial={{ y:-20, opacity: 0 }}
          animate={{ y:0, opacity: 1}}
          transition={{
            delay: 0.3,
            duration: 0.3
          }}
          className=' lg:text-lg text-lg text-[#979696] mx-8'>Welcome Back 👋</motion.p>
          <motion.input 
          initial={{ y:-20, opacity: 0 }}
          animate={{ y:0, opacity: 1}}
          transition={{
            delay: 0.4,
            duration: 0.3
          }}
          className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
            type="email"
            placeholder="Email Address"
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          {
            errors.email && touched.email ? <div className='text-red-500 ml-10 -mt-3'>{"*" + errors.email}</div> : null
          }
          <motion.input 
          initial={{ y:-20, opacity: 0 }}
          animate={{ y:0, opacity: 1}}
          transition={{
            delay: 0.5,
            duration: 0.3
          }}
          className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
            type="password"
            placeholder="Password"
            name='password'
            autoComplete='off'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {
            errors.password && touched.password ? <div className='text-red-500 ml-10 -mt-3'>{"*" + errors.password}</div> : null
          }

          <motion.button 
          initial={{ opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            delay: 0.65, 
            duration: 0.3
          }}
          variant='solid' type='button' onClick={()=>{onLogin(values)}} className='bg-[#6D42B9] hover:bg-[#5c369f] active:scale-95 text-white text-lg  w-[90%] lg:w-[70%] h-12 rounded-lg mx-8 mt-2 duration-300'>Log in</motion.button>
          <motion.p 
          initial={{y:-20,  opacity: 0 }}
          animate={{y:0,opacity: 1}}
          transition={{
            delay: 0.75,
            duration: 0.3
          }}
           className='lg:ml-8 mt-2 lg:mt-1 mb-6 lg:mb-1' >Don't have an account <span className='text-[#6D42B9] cursor-pointer ml-1 font-semibold' onClick={() => { setisNew(!isNew) }}>Sign up</span></motion.p>
        </div>

      </form>
    </>

  )
}

export default Login
