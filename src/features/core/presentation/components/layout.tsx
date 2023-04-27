import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

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
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <h1>This is the footer</h1>
      </footer>
    </div>
  );
}
