import styles from "./All-CSSs/TaskButtons.module.css";

const BookAppointment = ({ baclicked }) => {
   return (
      <button
         className={`${styles.button89} ${styles.posBA}`}
         role='button'
         onClick={baclicked}
      >
         Book an Appointment
      </button>
   );
};

export default BookAppointment;
