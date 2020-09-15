import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from "./components/Overview/Overview";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

export default function Layout({children}) {
    return (
      <>
        <Navbar />
        <main>
          <Home />
          <Overview />
          <Service />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </>
    );
}