import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
   const [role, setRole] = useState("");

   return (
      <form method='post' className='containerr'>
         <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
         </div>
         <div className='inputs'>
            <div className='input'>
               <img src={user_icon} alt='' />
               <input type='text' placeholder='Name' />
            </div>

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

         <div className='submit-container'>
            <div className='submit'>Sign Up</div>
            <div className='submit gray'>
               <Link to='../login' className='links'>
                  Login
               </Link>
            </div>
         </div>
      </form>
   );
};

export default Login;
