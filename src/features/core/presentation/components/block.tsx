import { ReactNode } from "react";

import styles from './block.module.css';

type BlockProps = {
  children?: ReactNode,
  className?: string[],
}

export const Block = (
  {
    children,
    className = [],
  }: BlockProps,
) => {
  return (
    <div className={[
      styles.default,
      className.join(' '),
      ].join(' ')}
    >
      {children}
    </div>
  );
}
