
import { Navbar } from "@nextui-org/react";
import { ReactNode } from "react"

type NavBarCompProps = { children?: ReactNode }

const NavBarComp = ({children}: NavBarCompProps) => <Navbar>{children}</Navbar>

type NavBarCompContentProps = { children?: ReactNode }
const NavBarCompContent = ({
  children
}: NavBarCompContentProps) => <Navbar.Content>{children}</Navbar.Content>

type NavBarCompLinkProps = {
  children?: ReactNode,
  href?: string,
}
const NavBarCompLink = ({
  children,
  href = "#",
}: NavBarCompLinkProps) => {
  return (
    <Navbar.Link href={href}>{children}</Navbar.Link>
  );
}

NavBarComp.Content = NavBarCompContent;
NavBarComp.Link = NavBarCompLink;

export default NavBarComp;
