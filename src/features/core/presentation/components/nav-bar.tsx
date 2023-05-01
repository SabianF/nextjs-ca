import Link from "next/link";
import { NavTextButton } from "./nav-text-button";

export const NavBar = () => {
  return (
    <div className="bg-white">
      <nav className="nav">
        <NavTextButton href="/">Home</NavTextButton>
        <NavTextButton href="/test">One</NavTextButton>
      </nav>
    </div>
  );
}
