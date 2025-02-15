import React from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../Footer/Footer';

function Layout({ children }) {
  return (
    <div className="app-layout">
      <NavBar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;