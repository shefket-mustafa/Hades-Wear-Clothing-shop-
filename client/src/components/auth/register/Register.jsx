import './register.css'
import { Link } from "react-router";
export default function Register() {
  return <div className="register-container">

    <form className="register-form">
    <p className='register-title'>Register</p>

    <label htmlFor="email">Email</label>
    <input name="email" type="text" placeholder="John Doe" required/>

    <label htmlFor="password">Password</label>
    <input name="password" type="text" placeholder="******" required/>

    <label htmlFor="confirmPassword">Confirm password</label>
    <input name="confirmPassword" type="text" placeholder="******" required/>

    <div className='register-already'>
    <p>Already registered?</p>
    <Link to='/login'>Login</Link>
    </div>

    <button>Submit</button>
    </form>
  </div>;
}