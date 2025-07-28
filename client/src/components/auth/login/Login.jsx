import './login.css'
import { Link, useNavigate } from "react-router";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/slices/authSlice';
import { clearPopUp, showPopUp } from '../../../redux/slices/popUpSlice';
import { loginSchema } from '../../../yup/loginSchema';
import {yupResolver} from "@hookform/resolvers/yup"


export default function Login() {

  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(loginSchema)});


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
    <input {...register("email")} name="email" type='text' required/>
    {errors.email && <p className="error">{errors.email.message}</p>}

    <label htmlFor="password">Password</label>
    
    <input {...register("password")} name="password" type='password' required/>
    {errors.password && <p className="error">{errors.password.message}</p>}

    <button>Submit</button>

    <div className='login-already'>
    <p>Not registratered?</p>
    <Link to='/register'>Register</Link>
    </div>
    </form>
  </div>;
}