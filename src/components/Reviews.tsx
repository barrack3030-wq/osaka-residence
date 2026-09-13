import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    { id: 1, name: "Customer review", text: "Customer review placeholder. This area is reserved for real customer feedback once it becomes available." },
    { id: 2, name: "Customer review", text: "Customer review placeholder. This area is reserved for real customer feedback once it becomes available." },
    { id: 3, name: "Customer review", text: "Customer review placeholder. This area is reserved for real customer feedback once it becomes available." },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-center items-center gap-1 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">
            4,6 / 5
          </h2>
          <p className="text-stone-500 font-medium tracking-wide uppercase text-sm">
            Berdasarkan 65 Reviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-stone-100"
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-medium text-stone-900">{review.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
