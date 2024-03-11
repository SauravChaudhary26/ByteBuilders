import ProfileDDLI from "./ProfileDDLI";
import styles from "../All-CSSs/ProfileDD.module.css";
import { IoSettings } from "react-icons/io5";

const ProfileDD = ({ cond }) => {
   return (
      <ul
         className={`${styles.profileDD} ${
            cond ? styles.active : styles.inactive
         }`}
      >
         <ProfileDDLI text='View Profile' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Edit Profile' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Inbox' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Settings' imgsrc='./setting.png'></ProfileDDLI>
         <ProfileDDLI text='Help' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Logout' imgsrc=''></ProfileDDLI>
      </ul>
   );
};

export default ProfileDD;
