import styles from "../All-CSSs/TestDD.module.css";
import { BiSolidReport } from "react-icons/bi";
import { GiTestTubes } from "react-icons/gi";

const TestDDLI = ({ text }) => {
   return (
      <li className={styles.testddli}>
         <span>
            {text === "Schdule a Test" && <GiTestTubes />}
            {text === "View Reports" && <BiSolidReport />}
         </span>
         <a className={styles.links}>{text}</a>
      </li>
   );
};

export default TestDDLI;
