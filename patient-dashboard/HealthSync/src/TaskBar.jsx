import styles from "./All-CSSs/Taskbar.module.css";
import Logo from "./Logo";
import { CgProfile } from "react-icons/cg";
import ProfileText from "./ProfileText";
import Payments from "./Payments";

const TaskBar = () => {
   return (
      <div className={styles.bar}>
         <Logo></Logo>
         <CgProfile className={styles.profileIcon} />
         <ProfileText></ProfileText>
         <Payments></Payments>
      </div>
   );
};

export default TaskBar;
