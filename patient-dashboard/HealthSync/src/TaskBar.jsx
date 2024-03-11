import { IoPersonCircle } from "react-icons/io5";
import Logo from "./Logo";
import Tabs from "./Tabs";
import styles from "./All-CSSs/Taskbar.module.css";
import { useState, useEffect, useRef } from "react";
import ProfileDD from "./DropDowns/ProfileDD";
import BADD from "./DropDowns/BADD";
import TestDD from "./DropDowns/TestDD";

const TaskBar = () => {
   let [open, setOpen] = useState(false);
   let [baOpen, setBaOpen] = useState(false);
   let [testOpen, setTestOpen] = useState(false);

   let whenClicked = (event) => {
      event.stopPropagation();
      setOpen(!open);
   };

   let baclicked = (event) => {
      event.stopPropagation();
      setBaOpen(!baOpen);
   };

   let testClicked = (event) => {
      event.stopPropagation();
      console.log(testOpen);
      setTestOpen(!testOpen);
   };

   let menuRef = useRef();

   useEffect(() => {
      let handler = (e) => {
         if (!menuRef.current.contains(e.target)) {
            e.stopPropagation();
            setOpen(false);
            setBaOpen(false);
            setTestOpen(false);
         }
      };

      document.addEventListener("mousedown", handler);

      return () => {
         document.removeEventListener("mousedown", handler);
      };
   });

   return (
      <div className={styles.bar} ref={menuRef}>
         <Logo></Logo>
         <span className={styles.sspan}>
            <IoPersonCircle
               className={styles.profileIcon}
               onClick={whenClicked}
            />
         </span>
         <Tabs baclicked={baclicked} testClicked={testClicked}></Tabs>
         <ProfileDD cond={open}></ProfileDD>
         <BADD cond={baOpen}></BADD>
         <TestDD cond={testOpen}></TestDD>
      </div>
   );
};

export default TaskBar;
