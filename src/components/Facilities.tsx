import { motion } from 'motion/react';
import { Wifi, ShieldCheck, Wind, Home, CheckCircle2 } from 'lucide-react';

export function Facilities() {
  const facilities = [
    {
      icon: <Home size={24} />,
      title: "Kamar Nyaman",
      desc: "Detail fasilitas"
    },
    {
      icon: <Wifi size={24} />,
      title: "Konektivitas",
      desc: "Informasi tersedia"
    },
    {
      icon: <Wind size={24} />,
      title: "Sirkulasi Udara",
      desc: "Detail fasilitas"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Keamanan",
      desc: "Hubungi pengelola"
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Area Bersama",
      desc: "Informasi tersedia"
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Fasilitas Lainnya",
      desc: "Hubungi pengelola"
    }
  ];

  return (
    <section id="fasilitas" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">
            Fasilitas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 text-stone-900">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-1">{item.title}</h3>
                <p className="text-stone-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
