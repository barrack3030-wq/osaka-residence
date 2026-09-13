import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah Osaka Residence khusus putri?",
      a: "Ya, Osaka Residence BJ999 dirancang secara khusus sebagai hunian atau kost bagi perempuan/mahasiswi."
    },
    {
      q: "Bagaimana cara mengecek ketersediaan kamar?",
      a: "Ketersediaan kamar dapat dicek secara langsung dengan menghubungi pengelola kami melalui tombol WhatsApp yang tersedia di website ini."
    },
    {
      q: "Bagaimana cara mengetahui harga kamar?",
      a: "Informasi detail mengenai tipe kamar beserta harganya dapat Anda peroleh dengan menghubungi pengelola via WhatsApp."
    },
    {
      q: "Di mana lokasi Osaka Residence BJ999?",
      a: "Kami berlokasi di Jl. MT Haryono Gg. VIII No.999, Dinoyo, Kec. Lowokwaru, Kota Malang. Area strategis yang dekat dengan berbagai fasilitas umum dan kampus."
    },
    {
      q: "Bagaimana cara menghubungi pengelola?",
      a: "Anda dapat menghubungi pengelola secara cepat melalui nomor WhatsApp 0857-4954-5557."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">
            Pertanyaan Umum
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-stone-200"
            >
              <button
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors pr-8">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-stone-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-stone-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
