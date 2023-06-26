import React from 'react'
import "../../src/App.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Sparkle from './img/sparkle.png'
import { useFormik } from 'formik'
import { validationSchema } from '../schema/index.jsx'
import toast from 'react-hot-toast'

const Register = ({ isNew, setisNew }) => {
  const navigate = useNavigate();

  const initialvalues = {
    email: '',
    password: '',
  }
  const generateError = (error) =>
    toast.error(error)

  const onRegister = async (values, action) => {
    console.log('Form data register', values);
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API + "/register",
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
          
          toast.success("Registration Successfull")
          localStorage.setItem('email',user.email)
          navigate("/");
          window.location.reload();

        }
      }
    } catch (ex) {
      console.log(ex);
    }
    action.resetForm();
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    onSubmit: onRegister,
    validationSchema: validationSchema

  })
  return (
    <>
      <form onSubmit={handleSubmit} className='flex-1 flex justify-start items-start'>

      <div className='modal-left flex-1 flex flex-col gap-2 justify-start lg:items-start items-center'>
          <img src={Sparkle} alt="" className=' w-24 h-24 ml-6' />
          <h1 className=' text-3xl font-medium text-black mx-8'>Get your <span className=' text-5xl font-bold text-black'>OwnLink</span></h1>
          <p className=' lg:text-lg text-lg text-[#979696] mx-8'>Create an account 👋</p>
          <input className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
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
         <input className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
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
         <input className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
            type="password"
            placeholder="Confirm Password"
            name='confirmPassword'
            autoComplete='off'
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {
            errors.confirmPassword && touched.confirmPassword ? <div className='text-red-500 ml-10 -mt-3'>{"*" + errors.confirmPassword}</div> : null
          }
          <button type="submit" className='bg-[#0266ff] hover:bg-[#074bb1] active:scale-95 text-white text-lg  w-[90%] lg:w-[70%] h-12 rounded-lg mx-8 mt-2 duration-300'>Sign Up</button>
          <p className='lg:ml-8 mt-2 lg:mt-1 mb-6 lg:mb-1' >Already have an account <span className='text-[#0266ff] cursor-pointer ml-1 font-semibold' onClick={() => { setisNew(!isNew) }}>Log in</span></p>

        </div>

      </form>
    </>
  )
}

export default Register
