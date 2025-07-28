import './login.css'
import { Link } from "react-router";
export default function Login() {
  return <div className="login-container">

    <form className="login-form">
    <p className='login-title'>Login</p>

    <label htmlFor="email">Email</label>
    <input name="email" type="text" placeholder="John Doe" required/>

    <label htmlFor="password">Password</label>
    <input name="password" type="text" placeholder="******" required/>

    <div className='login-already'>
    <p>Not registratered?</p>
    <Link to='/register'>Register</Link>
    </div>

    <button>Submit</button>
    </form>
  </div>;
}