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
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="layout">{children}</main>

      <footer>
        <FooterBlock />
      </footer>
    </div>
  );
}
