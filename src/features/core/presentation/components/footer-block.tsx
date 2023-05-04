import { Block } from "./block"

import styles from "./footer-block.module.css";

export const FooterBlock = () => {
  return (
    <Block className={[ styles.default ]}>
      <h1>This is the footer</h1>
    </Block>
  );
}
