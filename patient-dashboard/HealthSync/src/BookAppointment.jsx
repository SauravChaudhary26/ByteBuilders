import styles from "./All-CSSs/TaskButtons.module.css";

const BookAppointment = ({ baclicked, reff }) => {
   return (
      <button
         className={`${styles.button89} ${styles.posBA}`}
         role='button'
         onClick={baclicked}
         ref={reff}
      >
         Book an Appointment
      </button>
   );
};

export default BookAppointment;
