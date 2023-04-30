import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="bg-primary-subtle">
      <nav className="nav">
        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        <Link className="nav-link" href="">Link</Link>
        <Link className="nav-link" href="">Link</Link>
        <Link className="nav-link disabled" href="">Disabled</Link>
      </nav>
    </div>
  );
}
