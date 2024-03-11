import { IoPersonCircle } from "react-icons/io5";
import Logo from "./Logo";
import Tabs from "./Tabs";
import styles from "./All-CSSs/Taskbar.module.css";
import { useState } from "react";
import ProfileDD from "./DropDowns/ProfileDD";
import BADD from "./DropDowns/BADD";

const TaskBar = () => {
   let [open, setOpen] = useState(false);
   let [baOpen, setBaOpen] = useState(false);

   let whenClicked = () => {
      setOpen(!open);
   };

   let baclicked = () => {
      console.log(baOpen);
      setBaOpen(!baOpen);
   };

   return (
      <div className={styles.bar}>
         <Logo></Logo>
         <IoPersonCircle className={styles.profileIcon} onClick={whenClicked} />
         <Tabs baclicked={baclicked}></Tabs>
         <ProfileDD cond={open}></ProfileDD>
         <BADD cond={baOpen}></BADD>
      </div>
   );
};

export default TaskBar;
