'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue blur-3xl" />
      </div>

      {/* Línea decorativa dorada superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm uppercase tracking-widest mb-4 font-medium"
        >
          Iglesia Adventista del Séptimo Día
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Distrito Adventista
          <br />
          <span className="text-gold">San José Pinula</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-l-4 border-gold pl-6 text-left max-w-2xl mx-auto mb-10"
        >
          <p className="text-white/90 text-lg italic leading-relaxed">
            "Que nadie te menosprecie por ser joven. Al contrario, que los creyentes vean en ti
            un ejemplo a seguir en la manera de hablar, en la conducta, y en amor, fe y pureza."
          </p>
          <p className="text-gold text-sm mt-2 font-medium">1 Timoteo 4:12 (NVI)</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/70 text-base max-w-xl mx-auto mb-10"
        >
          Te invitamos a participar como hermano Adventista en este día para poder servir,
          multiplicar la palabra y compartir el amor de Dios.
        </motion.p>

        <motion.a
          href="#actividades"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gold text-navy font-semibold px-8 py-3 rounded-full text-sm tracking-wide hover:brightness-110 transition-all"
        >
          Ver Actividades
        </motion.a>
      </div>

      {/* Flecha scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
