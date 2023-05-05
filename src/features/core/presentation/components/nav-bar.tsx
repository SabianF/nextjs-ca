
import NavBarComp from "../../domain/repositories/components";

import styles from "./nav-bar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.bg}>
      <NavBarComp>
        <NavBarComp.Content>
          <NavBarComp.Link href="/">Home</NavBarComp.Link>
          <NavBarComp.Link href="/test">Test Page</NavBarComp.Link>
        </NavBarComp.Content>
      </NavBarComp>
    </div>
  );
}
