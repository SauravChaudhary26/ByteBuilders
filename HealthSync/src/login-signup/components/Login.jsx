import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
   const [role, setRole] = useState("");
   return (
      <form method='post' className='containerr'>
         <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
         </div>
         <div className='inputs'>
            <div className='input'>
               <img src={email_icon} alt='' />
               <input type='email' placeholder='Email Id' />
            </div>
            <div className='input'>
               <img src={password_icon} alt='' />
               <input type='password' placeholder='Password' />
            </div>
            {/* Role selection dropdown */}
            <div className='input'>
               <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
               >
                  <option value=''>Select Role</option>
                  <option value='doctor'>Doctor</option>
                  <option value='patient'>Patient</option>
               </select>
            </div>
         </div>

         <div className='forgot-password'>
            Forgot Password? <span>Click Here!</span>
         </div>

         <div className='submit-container'>
            <div className='submit gray'>
               <Link to='../signup' className='links'>
                  Sign Up
               </Link>
            </div>
            <div className='submit'>Login</div>
         </div>
      </form>
   );
};

export default Login;
