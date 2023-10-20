import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from './js/app/homeAPP';
import { Services } from './js/app/servicesAPP';
import { MenuApp, Contact, Footer, Header } from "./js/components/sectionsCOM" ;
import { Project } from './js/app/projectAPP' ;


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <header className='contHeader'>
      <Header />
    </header>
    <main className='contMain'>
      <Home />
      <Services />
      <Project />
      <Contact />
      <MenuApp />
    </main>
    <footer className='contFooter'>
      <Footer />
    </footer>
  </>
);
