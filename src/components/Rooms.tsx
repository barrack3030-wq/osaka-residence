import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Rooms() {
  // Placeholder data - designed to be easily replaced later
  const rooms = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80",
      type: "Tipe Standard",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      type: "Tipe Premium",
    }
  ];

  return (
    <section id="kamar" className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">
            Pilihan Kamar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-200">
                <img
                  src={room.image}
                  alt={`Kamar ${room.type}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-stone-900 mb-2">{room.type}</h3>
                <p className="text-stone-500 mb-6">Informasi kamar tersedia melalui WhatsApp.</p>
                
                <a
                  href="https://wa.me/6285749545557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors uppercase tracking-wider"
                >
                  Tanyakan Ketersediaan
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
