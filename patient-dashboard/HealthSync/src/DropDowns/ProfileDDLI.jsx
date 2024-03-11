import styles from "../All-CSSs/ProfileDD.module.css";

const ProfileDDLI = ({ text, imgsrc }) => {
   return (
      <li className={styles.profileDDLI}>
         <img src={imgsrc} alt='not found' />
         <a>{text}</a>
      </li>
   );
};

export default ProfileDDLI;
