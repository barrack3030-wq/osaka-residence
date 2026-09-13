/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Gallery />
        <Location />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

