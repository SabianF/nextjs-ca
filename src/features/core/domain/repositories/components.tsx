
import { Navbar as NavbarNextUI } from "@nextui-org/react";
import { ReactNode } from "react"

type NavBarCompProps = { children?: ReactNode }

const NavBarComp = ({children}: NavBarCompProps) => <NavbarNextUI>{children}</NavbarNextUI>

type NavBarCompContentProps = { children?: ReactNode }
const NavBarCompContent = ({
  children
}: NavBarCompContentProps) => <NavbarNextUI.Content>{children}</NavbarNextUI.Content>

type NavBarCompLinkProps = {
  children?: ReactNode,
  href?: string,
}
const NavBarCompLink = ({
  children,
  href = "#",
}: NavBarCompLinkProps) => {
  return (
    <NavbarNextUI.Link href={href}>{children}</NavbarNextUI.Link>
  );
}

NavBarComp.Content = NavBarCompContent;
NavBarComp.Link = NavBarCompLink;

export default NavBarComp;
