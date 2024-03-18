import styles from "../All-CSSs/BADD.module.css";
import BADDLI from "./BADDLI";

const BADD = ({ cond, reff }) => {
   return (
      <ul
         className={`${styles.badd} ${cond ? styles.active : styles.inactive}`}
         ref={reff}
      >
         <BADDLI text='New Appointment'></BADDLI>
         <BADDLI text='Past Appointments'></BADDLI>
      </ul>
   );
};

export default BADD;
