import Payments from "./Payments";
import Pharmacy from "./Pharmacy";
import Tests from "./Tests";
import BookAppointment from "./BookAppointment";
import styles from "./All-CSSs/Taskbar.module.css";

const Tabs = ({ baclicked, testClicked, reff }) => {
   return (
      <div className={styles.tabs}>
         <BookAppointment baclicked={baclicked} reff={reff}></BookAppointment>
         <Tests testClicked={testClicked}></Tests>
         <Pharmacy></Pharmacy>
         <Payments></Payments>
      </div>
   );
};

export default Tabs;
