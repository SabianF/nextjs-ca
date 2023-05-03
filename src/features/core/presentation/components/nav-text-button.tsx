import Link from "next/link";
import { ReactNode } from "react";

import styles from "./nav-text-button.module.css";

type NavTextButtonProps = {
  href?: string,
  disabled?: boolean,
  children: ReactNode,
}

export const NavTextButton = (
  {
    href = "",
    disabled = false,
    children,
  }: NavTextButtonProps,
) => {
  if (disabled) {
    return (
      <p>
        {children}
      </p>
    );
  }

  return (
    <Link
      className={[styles.paddingDefault, styles.colorDefault].join(' ')}
      href={href}
    >
      {children}
    </Link>
  );
}
