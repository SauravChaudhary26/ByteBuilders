import styles from "../All-CSSs/TestDD.module.css";
import TestDDLI from "./TestDDLI";

const TestDD = ({ cond }) => {
   return (
      <ul
         className={`${styles.testdd} ${
            cond ? styles.active : styles.inactive
         }`}
      >
         <TestDDLI text='Schdule a Test'></TestDDLI>
         <TestDDLI text='View Reports'></TestDDLI>
      </ul>
   );
};

export default TestDD;
