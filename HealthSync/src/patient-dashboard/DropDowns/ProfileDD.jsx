import ProfileDDLI from "./ProfileDDLI";
import styles from "../All-CSSs/ProfileDD.module.css";

const ProfileDD = ({ cond, reff }) => {
   return (
      <ul
         className={`${styles.profileDD} ${
            cond ? styles.active : styles.inactive
         }`}
         ref={reff}
      >
         <ProfileDDLI text='View Profile' imgsrc='View'></ProfileDDLI>
         <ProfileDDLI text='Edit Profile' imgsrc='Edit'></ProfileDDLI>
         <ProfileDDLI text='Inbox' imgsrc='Inbox'></ProfileDDLI>
         <ProfileDDLI text='Settings' imgsrc='Settings'></ProfileDDLI>
         <ProfileDDLI text='Help' imgsrc='Help'></ProfileDDLI>
         <ProfileDDLI text='Logout' imgsrc='Logout'></ProfileDDLI>
      </ul>
   );
};

export default ProfileDD;
