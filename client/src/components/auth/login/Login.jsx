import './login.css'
import { Link, useNavigate } from "react-router";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/slices/authSlice';
import { useState } from 'react';
import PopUp from '../../pop-ups/popUp';
import { clearPopUp, showPopUp } from '../../../redux/slices/popUpSlice';


export default function Login() {

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const submitHandler = (data) => {
  
    dispatch(loginUser(data))
    .unwrap()
    .then(() => {
      dispatch(showPopUp("Login successful"));
      setTimeout(() => dispatch(clearPopUp()), 2000)
      navigate('/')})
    .catch(err => alert(err.message || "Login failed"))
  }
  return <div className="login-container">

    <form onSubmit={handleSubmit(submitHandler)} className="login-form">
    <p className='login-title'>Login</p>

    <label htmlFor="email">Email</label>
    <input {...register("email")} name="email" type="text" placeholder="John Doe" required/>

    <label htmlFor="password">Password</label>
    <input {...register("password")} name="password" type="text" placeholder="******" required/>

    <button>Submit</button>

    <div className='login-already'>
    <p>Not registratered?</p>
    <Link to='/register'>Register</Link>
    </div>
    </form>
  </div>;
}