import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./login.css";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = ({ setLoginUser }) => {
   const [user, setUser] = useState({
      email: "",
      password: "",
      role: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
         ...user,
         [name]: value,
      });
   };

   const login = () => {
      axios.post("http://localhost:8080/login", user).then((res) => {
         alert(res.data.message);
         setLoginUser(res.data.user);
      });
   };

   return (
      <form method='post' className='containerr'>
         <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
         </div>
         <div className='inputs'>
            <div className='input'>
               <img src={email_icon} alt='' />
               <input
                  type='email'
                  placeholder='Email Id'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
               />
            </div>
            <div className='input'>
               <img src={password_icon} alt='' />
               <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={user.password}
                  onChange={handleChange}
               />
            </div>
            {/* Role selection dropdown */}
            <div className='input'>
               <select
                  required
                  name='role'
                  value={user.role}
                  onChange={handleChange}
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
            <Link to='../signup' className='links'>
               <div className='submit gray'> Sign Up</div>
            </Link>

            <div className='submit' onClick={login}>
               Login
            </div>
         </div>
      </form>
   );
};

export default Login;
