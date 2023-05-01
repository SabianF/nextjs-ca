import Link from "next/link";
import { ReactNode } from "react";

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
      className="nav-link"
      href={href}
    >
      {children}
    </Link>
  );
}
