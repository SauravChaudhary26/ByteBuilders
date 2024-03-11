import { IoPersonCircle } from "react-icons/io5";
import Logo from "./Logo";
import ProfileText from "./ProfileText";
import Tabs from "./Tabs";
import styles from "./All-CSSs/Taskbar.module.css";
import { useState } from "react";
import ProfileDD from "./DropDowns/ProfileDD";

const TaskBar = () => {
   let [open, setOpen] = useState(false);

   let whenClicked = () => {
      console.log(open);
      setOpen(!open);
   };

   return (
      <div className={styles.bar}>
         <Logo></Logo>
         <IoPersonCircle className={styles.profileIcon} onClick={whenClicked} />
         {/* <ProfileText></ProfileText> */}
         <Tabs></Tabs>
         <ProfileDD cond={open}></ProfileDD>
      </div>
   );
};

export default TaskBar;
