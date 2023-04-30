import Head from "next/head";
import { ReactNode } from "react";
import { NavBar } from "./nav-bar";
import { FooterBlock } from "./footer-block";

type LayoutParams = {
  children?: ReactNode,
  title?: string,
}

export const Layout = (
  {
    children,
    title,
  }: LayoutParams,
) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <footer>
        <FooterBlock />
      </footer>
    </div>
  );
}
