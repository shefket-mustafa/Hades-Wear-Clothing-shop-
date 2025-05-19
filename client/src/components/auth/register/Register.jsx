import './register.css'
import registerImg from '../../../assets/images/register-form.jpg'

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

    <button>Submit</button>
    </form>
  </div>;
}