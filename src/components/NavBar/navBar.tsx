import Image from "next/image";
import classes from "./navBar.module.css";
import { assets } from "@/lib/constants";

const NavBar = () => (
  <nav className={classes.nav}>
    <div className={classes.navContainer}>
      <img className={classes.logo} src={assets.logo} alt="Wemza" />

      <div className={classes.navLinks}>
        <a href="#simple-money" className={classes.navLink}>
          Simple Money
        </a>
        <a href="#shared-activities" className={classes.navLink}>
          Shared Activities
        </a>
        <a href="#how-it-works" className={classes.navLink}>
          How It Works
        </a>
        <a href="#businesses" className={classes.navLink}>
          For Businesses
        </a>
      </div>

      <button className={classes.button}>Get App</button>
    </div>
  </nav>
);

export default NavBar;
