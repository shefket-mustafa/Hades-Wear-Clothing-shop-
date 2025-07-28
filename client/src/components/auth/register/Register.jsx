import './register.css';
import { Link, useNavigate } from "react-router";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import { registerUser } from '../../../redux/slices/authSlice';
import { useState } from 'react';
import { clearPopUp, showPopUp } from '../../../redux/slices/popUpSlice';


export default function Register() {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const submitHandler = (data) => {
    if(data.password !== data.confirmPassword){
      return alert("Passwords do not match")
    }
   
    dispatch(registerUser(data))
    .unwrap()
    .then(() => {
      dispatch(showPopUp("Registration successful"));
      setTimeout(() => dispatch(clearPopUp()), 2000)
      navigate('/')})
    .catch(err => alert(err.message || "Registration failed"))
  }


  return <div className="register-container">

    <form onSubmit={handleSubmit(submitHandler)} className="register-form">
    <p className='register-title'>Register</p>

    <label htmlFor="email">Email</label>
    <input {...register("email")} name="email" type="text" placeholder="John Doe" required/>

    <label htmlFor="password">Password</label>
    <input {...register("password")} name="password" type="text" placeholder="******" required/>

    <label htmlFor="confirmPassword">Confirm password</label>
    <input {...register("confirmPassword")} name="confirmPassword" type="text" placeholder="******" required/>

    <button type='submit'>Submit</button>
    
    <div className='register-already'>
    <p>Already registered?</p>
    <Link to='/login'>Login</Link>
    </div>
    </form>
  </div>;
}