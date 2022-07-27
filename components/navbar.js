import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { RiMenuFill,RiSearch2Line ,RiUserAddLine} from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width="150px" height="75px" />
      </div>
      <RiMenuFill
        className={styles.iconMenu}
        size={25}
        onClick={() => setShow(show ? false : true)}
      />
      <ul className={show ? styles.menuShow : styles.menuHidden}>
        <li>
          <Link href="/">
            <a className={styles.linkDecoration} >Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.linkDecoration} >How it Work</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.linkDecoration} >Featured</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.linkDecoration} >Contact</a>
          </Link>
        </li>
      </ul>
      <span className={styles.iconTools}>
        <RiSearch2Line className={styles.tool} size={20}/>
        <RiUserAddLine className={styles.tool} size={20}/>
      </span>
    </div>
  );
};
export default Navbar;
