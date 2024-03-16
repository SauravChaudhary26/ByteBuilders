import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./src/welcome/App";
import Login from "./src/login-signup/components/Login";
import Signup from "./src/login-signup/components/Signup";
import PatientDashboard from "./src/patient-dashboard/App";

const App = () => {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Welcome></Welcome>,
      },
      {
         path: "/login",
         element: <Login></Login>,
      },
      {
         path: "/signup",
         element: <Signup></Signup>,
      },
      {
         path: "/dashboard",
         element: <PatientDashboard></PatientDashboard>,
      },
   ]);
   return (
      <>
         <RouterProvider router={router}></RouterProvider>
      </>
   );
};

export default App;
