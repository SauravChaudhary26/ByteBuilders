import ProfileDDLI from "./ProfileDDLI";
import styles from "../All-CSSs/ProfileDD.module.css";

const ProfileDD = () => {
   return (
      <div className={styles.profileDD}>
         <ProfileDDLI text='View Profile' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Edit Profile' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Settings' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Help' imgsrc=''></ProfileDDLI>
         <ProfileDDLI text='Logout' imgsrc=''></ProfileDDLI>
      </div>
   );
};

export default ProfileDD;
