import { NavTextButton } from "./nav-text-button";

import styles from "./nav-bar.module.css";
import { Navbar } from "@nextui-org/react";

export const NavBar = () => {
  return (
    <div className={styles.bg}>
      <Navbar>
        <Navbar.Content>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/test">Test Page</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}
