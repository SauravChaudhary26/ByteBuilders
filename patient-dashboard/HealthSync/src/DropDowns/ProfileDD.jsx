import ProfileDDLI from "./ProfileDDLI";
import styles from "../All-CSSs/ProfileDD.module.css";

const ProfileDD = () => {
   return (
      <div className={styles.profileDD}>
         <ProfileDDLI text='View Profile'></ProfileDDLI>
      </div>
   );
};

export default ProfileDD;
