export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 md:py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold tracking-widest leading-none mb-1">
              OSAKA RESIDENCE
            </h3>
            <p className="text-stone-500 text-xs font-medium tracking-[0.2em] mb-6">
              BJ999
            </p>
            <p className="mb-6 max-w-sm">
              Kost Putri Malang
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Alamat</h4>
            <p className="leading-relaxed">
              Jl. MT Haryono Gg. VIII No.999,<br />
              Dinoyo, Kec. Lowokwaru,<br />
              Kota Malang, Jawa Timur 65144
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Kontak</h4>
            <p className="mb-4">0857-4954-5557</p>
            <div className="flex flex-col items-start gap-3">
              <a 
                href="https://wa.me/6285749545557" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="https://maps.google.com/?q=Jl.+MT+Haryono+Gg.+VIII+No.999,+Dinoyo,+Kec.+Lowokwaru,+Kota+Malang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Google Maps
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-sm text-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Osaka Residence BJ999. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
