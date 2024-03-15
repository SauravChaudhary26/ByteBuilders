import styles from "../All-CSSs/ProfileDD.module.css";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdLiveHelp } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const ProfileDDLI = ({ text, imgsrc }) => {
   return (
      <li className={styles.profileDDLI}>
         <span>
            {imgsrc === "Settings" && <IoMdSettings />}
            {imgsrc === "Logout" && <RiLogoutBoxRFill />}
            {imgsrc === "Help" && <MdLiveHelp />}
            {imgsrc === "Inbox" && <RiInboxArchiveFill />}
            {imgsrc == "Edit" && <MdEdit />}
            {imgsrc == "View" && <IoPerson />}
         </span>
         <a className={styles.links}>{text}</a>
      </li>
   );
};

export default ProfileDDLI;
