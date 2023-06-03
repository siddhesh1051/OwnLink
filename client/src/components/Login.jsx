import React, { useState } from 'react'
import Hero from './img/hero.jpg'
import "../../src/App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Sparkle from './img/sparkle.png'
import { useFormik } from 'formik'
import { validationSchema } from '../schema/index.jsx'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    console.log('Form data login', values);
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API + "/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      console.log(data);

      const token = data.token;
      const user = data.user;

      localStorage.setItem('token', token);
      console.log(user);

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          toast.success("Logged in Successfully", {
            position: "bottom-right",
          });
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }

    // action.resetForm();
  }



  const { values, errors, touched, handleBlur, handleChange, handleSubmit,action } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onLogin,



  })
  return (

    <>
      <form className='flex-1 flex justify-start items-start'>


        <div className='modal-left flex-1 flex flex-col gap-2 justify-start items-start'>
          <img src={Sparkle} alt="" className=' w-24 h-24 ml-6' />
          <h1 className=' text-3xl font-medium text-black mx-8'>Back to your <span className=' text-5xl font-bold text-black'>digital life</span></h1>
          <p className=' text-xl text-[#979696] mx-8'>Choose one of the options to go.</p>
          <input className="inputBox"
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
          <input className="inputBox"
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

          <button type='button' onClick={()=>{onLogin(values)}} className='bg-[#0266ff] text-white text-lg w-32 h-14 rounded-xl mx-8 mt-2'>Log in</button>
          <p className='ml-8'>Don't have an account <span className='text-[#0266ff] cursor-pointer ml-1 font-semibold' onClick={() => { setisNew(!isNew) }}>Sign up</span></p>
        </div>

      </form>
    </>

  )
}

export default Login
