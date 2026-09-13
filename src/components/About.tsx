import { motion } from 'motion/react';

export function About() {
  return (
    <section id="tentang" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
              Tinggal Nyaman di Dinoyo
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Osaka Residence BJ999 merupakan kost putri di kawasan Dinoyo, Lowokwaru, Kota Malang. Dirancang sebagai pilihan hunian bagi perempuan yang membutuhkan tempat tinggal praktis dan nyaman selama berada di Malang.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 aspect-[4/5] md:aspect-square relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
              alt="Interior Osaka Residence"
              className="w-full h-full object-cover"
            />
            {/* Subtle decorative accent */}
            <div className="absolute -inset-4 border border-stone-200 -z-10 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
