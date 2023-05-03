import { ReactNode } from "react";

import styles from './block.module.css';

enum BlockSize {
  normal,
}

type BlockProps = {
  children?: ReactNode,
  size?: BlockSize,
}

export const Block = (
  {
    children,
    size,
  }: BlockProps,
) => {
  if (size! == BlockSize.normal) {
    return (
      <div className={styles.normal}>{children}</div>
    );
  }

  return (
    <div className={styles.normal}>{children}</div>
  );
}
