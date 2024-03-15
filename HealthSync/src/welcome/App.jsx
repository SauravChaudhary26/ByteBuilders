import "./App.css";
import { Link } from "react-router-dom";

function Welcome() {
   return (
      <header>
         <nav>
            <div class='logo'>HealthSync Portal</div>
            <div class='menu'>
               <a href='#'>Home</a>
               <a href='#'>About</a>
               <a href='#'>Our Services</a>
               <a href='#'>Contact us</a>
            </div>
            <div class='register'>
               <Link to='/signup'>Register</Link>
            </div>
         </nav>
         <section class='h-txt'>
            <span>Hospital</span>
            <h1>Welcome to Our HealthSync Portal</h1>

            <br />
            <a href='/signup'>Book your Appointment</a>
         </section>
      </header>
   );
}

export default Welcome;

