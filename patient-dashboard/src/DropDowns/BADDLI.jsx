import styles from "../All-CSSs/BADD.module.css";
import { FaCalendarPlus } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
const BADDLI = ({ text }) => {
   return (
      <li className={styles.baddli}>
         <span>
            {text === "New Appointment" && <FaCalendarPlus />}
            {text === "Past Appointments" && <FaHistory />}
         </span>
         <a className={styles.links}>{text}</a>
      </li>
   );
};

export default BADDLI;
