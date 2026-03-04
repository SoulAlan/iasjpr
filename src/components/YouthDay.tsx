'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Calendar } from 'lucide-react'

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
      <div className="bg-navy border border-gold/30 rounded-xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <span className="text-gold text-3xl md:text-4xl font-bold tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/60 text-xs mt-2 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function YouthDay() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcularTiempo())

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calcularTiempo()), 1000)
    return () => clearInterval(interval)
  }, [])

  const iglesias = [
    'Iglesia Residenciales',
    'Iglesia No. 4',
    'Iglesia Central',
    'Iglesia Sector Norte',
    'Iglesia Nueva Esperanza',
  ]

  return (
    <section id="juventud" className="bg-gradient-to-b from-navy to-blue py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm uppercase tracking-widest mb-3">Evento Especial</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Día Mundial de la Juventud
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto">
            Serán varias actividades según distrito dentro de San José Pinula. Únete como hermano
            Adventista en este día especial para servir y compartir el amor de Dios.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-6 mb-14"
        >
          <CountdownBox value={timeLeft.dias} label="Días" />
          <div className="text-gold text-3xl font-bold self-center pb-6">:</div>
          <CountdownBox value={timeLeft.horas} label="Horas" />
          <div className="text-gold text-3xl font-bold self-center pb-6">:</div>
          <CountdownBox value={timeLeft.minutos} label="Minutos" />
          <div className="text-gold text-3xl font-bold self-center pb-6">:</div>
          <CountdownBox value={timeLeft.segundos} label="Segundos" />
        </motion.div>

        {/* Detalles del evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: <Calendar size={20} />, label: 'Fecha', value: '21 de Marzo, 2026' },
            { icon: <Clock size={20} />, label: 'Hora', value: 'Por confirmar' },
            { icon: <MapPin size={20} />, label: 'Lugar', value: 'Varios sectores — SJP' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="text-gold">{item.icon}</div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Iglesias participantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users size={20} className="text-gold" />
            <h3 className="text-white font-semibold text-lg">Iglesias Participantes</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {iglesias.map((iglesia) => (
              <div
                key={iglesia}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {iglesia}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
