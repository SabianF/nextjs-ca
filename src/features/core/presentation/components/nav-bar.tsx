import { NavTextButton } from "./nav-text-button";

import styles from "./nav-bar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.bg}>
      <nav className={styles.nav}>
        <NavTextButton href="/">Home</NavTextButton>
        <NavTextButton href="/test">One</NavTextButton>
      </nav>
    </div>
  );
}
