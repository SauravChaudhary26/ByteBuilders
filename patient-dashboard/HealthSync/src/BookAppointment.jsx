import styles from "./All-CSSs/TaskButtons.module.css";

const BookAppointment = () => {
   return (
      <button className={`${styles.button89} ${styles.posBA}`} role='button'>
         Book an Appointment
      </button>
   );
};

export default BookAppointment;
