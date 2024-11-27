import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Header from './Components/Header';
import SectionUno from './Components/SectionUno';
import SectionDos from './Components/SectionDos';
import SectionTres from './Components/SectionTres';
import SectionCuatro from './Components/SectionCuatro';
import Footer from './Components/Footer';

function Pets() {
  return (
    <div>
      <Header />
      <SectionUno/>
      <SectionDos/>
      <SectionTres/>
      <SectionCuatro/>
      <Footer/>
    </div>
  );
}

export default Pets;
