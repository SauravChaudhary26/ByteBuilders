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
         <ProfileDDLI text='View Profile'></ProfileDDLI>
         <ProfileDDLI text='Edit Profile'></ProfileDDLI>
         <ProfileDDLI text='Inbox'></ProfileDDLI>
         <ProfileDDLI text='Settings'></ProfileDDLI>
         <ProfileDDLI text='Help'></ProfileDDLI>
         <ProfileDDLI text='Logout'></ProfileDDLI>
      </ul>
   );
};

export default ProfileDD;
