'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Calendar, Shield, Flame, Zap, Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const TARGET_DATE = new Date('2026-03-21T09:00:00')

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

function calcularTiempo(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f72585 100%)',
            boxShadow: '0 0 30px rgba(247,37,133,0.4)',
          }}
        >
          <span className="text-white text-3xl md:text-5xl font-black tabular-nums drop-shadow">
            {String(value).padStart(2, '0')}
          </span>
        </motion.div>
      </AnimatePresence>
      <span className="text-white/70 text-xs mt-2 uppercase tracking-widest font-bold">{label}</span>
    </div>
  )
}

const clubes = [
  { nombre: 'Club Luken', iglesia: 'Fraijanes', href: '/clubs/luken' },
  { nombre: 'Club Judá', iglesia: 'Santa Catarina Pinula', href: '/clubs/juda' },
  { nombre: 'Club Conquistadores', iglesia: 'Pinula #3', href: null },
  { nombre: 'Club Conquistadores', iglesia: 'Pinula #4', href: null },
]

const iconosClub = [Shield, Flame, Zap, Star]

export default function YouthDay() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcularTiempo())

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calcularTiempo()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="juventud"
      className="relative overflow-hidden py-24 px-6"
      style={{ background: 'linear-gradient(135deg, #0d0221 0%, #1a0533 40%, #0d1b4b 100%)' }}
    >
      {/* Fondo decorativo — círculos de energía */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #f72585 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #4361ee 0%, transparent 70%)' }}
        />
        {/* Grid de puntos */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#f72585" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
            style={{ background: 'linear-gradient(90deg, #f72585, #ff6b35)', color: '#fff' }}
          >
            <Flame size={12} />
            Evento Especial · Conquistadores
            <Flame size={12} />
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4"
        >
          <h2
            className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #f72585 50%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fuerza
          </h2>
          <h2
            className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f72585 60%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Joven
          </h2>
          <p className="text-white/60 mt-4 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            4 clubes de Conquistadores uniendo fuerzas en San José Pinula.
            Un día para servir, compartir y demostrar que la juventud adventista está viva.
          </p>
        </motion.div>

        {/* Separador */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-1 mx-auto mb-12 rounded-full"
          style={{ background: 'linear-gradient(90deg, #f72585, #ff6b35)' }}
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center gap-4 md:gap-6 mb-16"
        >
          <CountdownBox value={timeLeft.dias} label="Días" />
          <span className="text-4xl font-black self-center pb-6" style={{ color: '#f72585' }}>:</span>
          <CountdownBox value={timeLeft.horas} label="Horas" />
          <span className="text-4xl font-black self-center pb-6" style={{ color: '#f72585' }}>:</span>
          <CountdownBox value={timeLeft.minutos} label="Minutos" />
          <span className="text-4xl font-black self-center pb-6" style={{ color: '#f72585' }}>:</span>
          <CountdownBox value={timeLeft.segundos} label="Segundos" />
        </motion.div>

        {/* Info del evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
        >
          {[
            { icon: <Calendar size={18} />, label: 'Fecha', value: '21 de Marzo, 2026' },
            { icon: <Clock size={18} />, label: 'Hora', value: 'Por confirmar' },
            { icon: <MapPin size={18} />, label: 'Lugar', value: 'Varios sectores — SJP' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-5 flex items-center gap-4 border"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(247,37,133,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f72585, #ff6b35)' }}
              >
                <span className="text-white">{item.icon}</span>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">{item.label}</p>
                <p className="text-white font-bold text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Clubes de Conquistadores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            className="text-center text-xs font-black uppercase tracking-widest mb-6"
            style={{ color: '#f72585' }}
          >
            Clubes que lideran este evento
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clubes.map((club, i) => {
              const Icono = iconosClub[i]
              const card = (
                <div className="flex items-center gap-4 w-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #f72585 0%, #ff6b35 100%)' }}
                  >
                    <Icono size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm leading-tight">{club.nombre}</p>
                    <p className="text-white/40 text-xs mt-0.5">{club.iglesia}</p>
                  </div>
                  {club.href && (
                    <ChevronRight size={16} className="text-white/30 group-hover:text-white/70 transition-colors flex-shrink-0" />
                  )}
                </div>
              )
              return (
                <motion.div
                  key={`${club.nombre}-${club.iglesia}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                >
                  {club.href ? (
                    <Link
                      href={club.href}
                      className="flex items-center gap-4 rounded-2xl p-4 border group cursor-pointer transition-all hover:border-orange-500/40 hover:bg-white/8"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        borderColor: 'rgba(255,107,53,0.2)',
                      }}
                    >
                      {card}
                    </Link>
                  ) : (
                    <div
                      className="flex items-center gap-4 rounded-2xl p-4 border group cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        borderColor: 'rgba(255,107,53,0.2)',
                      }}
                    >
                      {card}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
