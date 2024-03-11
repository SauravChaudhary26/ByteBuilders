import styles from "../All-CSSs/BADD.module.css";
import BADDLI from "./BADDLI";

const BADD = ({ cond }) => {
   return (
      <ul
         className={`${styles.badd} ${cond ? styles.active : styles.inactive}`}
      >
         <BADDLI text='New Appointment'></BADDLI>
         <BADDLI text='Past Appointments'></BADDLI>
      </ul>
   );
};

export default BADD;
