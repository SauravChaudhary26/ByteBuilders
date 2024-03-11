import styles from "../All-CSSs/ProfileDD.module.css";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdLiveHelp } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

const ProfileDDLI = ({ text, imgsrc }) => {
   return (
      <li className={styles.profileDDLI}>
         <span>
            {text === "Settings" && <IoMdSettings />}
            {text === "Logout" && <RiLogoutBoxRFill />}
            {text === "Help" && <MdLiveHelp />}
            {text === "Inbox" && <RiInboxArchiveFill />}
            {text === "Edit Profile" && <MdEdit />}
            {text === "View Profile" && <CgProfile />}
         </span>
         <a className={styles.links}>{text}</a>
      </li>
   );
};

export default ProfileDDLI;
