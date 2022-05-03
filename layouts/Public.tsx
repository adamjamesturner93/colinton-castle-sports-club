import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar";
import Footer from "components/Footers/Footer";

export default function Public({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}
