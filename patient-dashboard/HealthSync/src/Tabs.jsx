import Payments from "./Payments";
import Pharmacy from "./Pharmacy";
import Tests from "./Tests";
import BookAppointment from "./BookAppointment";
import styles from "./All-CSSs/Taskbar.module.css";

const Tabs = ({ baclicked }) => {
   return (
      <div className={styles.tabs}>
         <BookAppointment baclicked={baclicked}></BookAppointment>
         <Tests></Tests>
         <Pharmacy></Pharmacy>
         <Payments></Payments>
      </div>
   );
};

export default Tabs;
