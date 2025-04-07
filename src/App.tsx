import { MessageCircle, Wallet, Clock, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Background with image and violet glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/fondo2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-9 flex flex-col items-center min-h-screen">
        {/* Logo with violet glow */}
        <div className="mb-10 mt-8 animate-float">
          <div className="p-4 rounded-full shadow-[0_0_60px_rgba(191,0,255,0.8)] bg-purple-700/40">
            <img src='/logoanuncio.png' className='h-64 w-auto md:w-auto md:h-96' alt='Logo' />
          </div>
        </div>

        {/* Main Text */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Para crear tu cuenta
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200">
            envíanos un Whatsapp
          </p>
          <p className="text-xl md:text-2xl text-purple-300 animate-pulse">
            haciendo click en el botón de abajo
          </p>
          <ChevronDown className="mx-auto mt-auto animate-bounce" size={24} />
        </div>

        {/* WhatsApp Button with neon border */}
        <a
          href="https://wa.me/5491178443857"
          className="text-white font-bold py-5 px-10 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 mb-20 border-2 border-purple-500 shadow-[0_0_25px_rgba(191,0,255,0.9)] bg-black/60 pulse-glow"
        >
          <MessageCircle size={32} />
          <span className="text-lg">Crea tu usuario</span>
        </a>

        {/* Cards with neon border */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="p-6 rounded-2xl bg-black/40 border-2 border-purple-600 shadow-[0_0_20px_rgba(191,0,255,0.7)] hover:scale-105 transition-all">
            <div className="flex items-center gap-6">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-400 p-4 rounded-xl">
                <Wallet size={40} className="text-white" />
              </div>
              <p className="text-lg font-semibold">ACEPTAMOS TRANSFERENCIAS DE BANCOS CBU O CVU.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border-2 border-purple-600 shadow-[0_0_20px_rgba(191,0,255,0.7)] hover:scale-105 transition-all">
            <div className="flex items-center gap-6">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-400 p-4 rounded-xl">
                <Clock size={40} className="text-white" />
              </div>
              <p className="text-lg font-semibold">ESTAMOS CARGANDO LAS 24 HS TODOS LOS DÍAS.</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-sm text-purple-200 max-w-2xl mx-auto px-8 py-4 rounded-full w-full border-2 border-purple-600 bg-black/30 shadow-[0_0_15px_rgba(191,0,255,0.6)]">
          <p>JUGAR COMPULSIVAMENTE ES PERJUDICIAL PARA LA SALUD.</p>
          <p>PROHIBIDO EL JUEGO DE AZAR A MENORES DE 18 AÑOS.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
