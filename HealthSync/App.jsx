import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Welcome from "./src/welcome/App";
import Login from "./src/login-signup/components/Login";
import Signup from "./src/login-signup/components/Signup";
import PatientDashboard from "./src/patient-dashboard/App";

const App = () => {
   const [user, setLoginUser] = useState({});

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Welcome></Welcome>,
      },
      {
         path: "/login",
         element: <Login setLoginUser={setLoginUser}></Login>,
      },
      {
         path: "/signup",
         element: <Signup></Signup>,
      },
      {
         path: "/dashboard",
         element:
            user && user._id ? (
               <PatientDashboard></PatientDashboard>
            ) : (
               <Welcome></Welcome>
            ),
      },
   ]);
   return (
      <>
         <RouterProvider router={router}></RouterProvider>
      </>
   );
};

export default App;
