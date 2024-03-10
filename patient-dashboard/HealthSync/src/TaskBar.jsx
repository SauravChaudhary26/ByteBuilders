import { IoPersonCircle } from "react-icons/io5";
import Logo from "./Logo";
import ProfileText from "./ProfileText";
import Tabs from "./Tabs";
import styles from "./All-CSSs/Taskbar.module.css";

const TaskBar = () => {
   return (
      <div className={styles.bar}>
         <Logo></Logo>
         <IoPersonCircle className={styles.profileIcon} />
         <ProfileText></ProfileText>
         <Tabs></Tabs>
      </div>
   );
};

export default TaskBar;
