import React, { ReactNode } from 'react';
import Head from "next/head"
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  title: String;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;