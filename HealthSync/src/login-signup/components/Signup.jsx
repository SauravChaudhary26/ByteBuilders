import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./login.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
   const [user, setUser] = useState({
      name: "",
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

   const signup = () => {
      const { name, email, password, role } = user;

      if (name && email && password && role) {
         axios
            .post("http://localhost:8080/signup", user)
            .then((res) => alert(res.data.message));
      } else {
         alert("invalid input");
      }
   };

   return (
      <form method='post' className='containerr'>
         <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
         </div>
         <div className='inputs'>
            <div className='input'>
               <img src={user_icon} alt='' />
               <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={user.name}
                  onChange={handleChange}
               />
            </div>

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
                  name='role'
                  value={user.role}
                  required
                  onChange={handleChange}
               >
                  <option value=''>Select Role</option>
                  <option value='doctor'>Doctor</option>
                  <option value='patient'>Patient</option>
               </select>
            </div>
         </div>

         <div className='submit-container'>
            <div className='submit' type='submit' onClick={signup}>
               Sign Up
            </div>
            <Link to='../login' className='links'>
               <div className='submit gray'>Login</div>
            </Link>
         </div>
      </form>
   );
};

export default Login;
