import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Footer, Header, } from "./js/components/header&footerCOMP" ;
import { Contact } from './js/components/contactCOM' ;
import { MenuApp } from './js/components/menuAppComp' ;


import { Prueba } from "./js/prueba";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <header className='contHeader'>
      <Header />
    </header>
    <main className='contMain'>
      <MenuApp/>
      <Contact />
    </main>
    <footer className='contFooter'>
      <Footer />
    </footer>
  </>
);
