import styles from "./All-CSSs/TaskButtons.module.css";

const Tests = ({ testClicked }) => {
   return (
      <button
         className={`${styles.button89} ${styles.posTests} `}
         role='button'
         onClick={testClicked}
      >
         Tests
      </button>
   );
};

export default Tests;
