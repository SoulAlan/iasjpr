'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { iglesias } from '@/lib/data'

export default function Schedule() {
  return (
    <section id="horarios" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue text-sm uppercase tracking-widest mb-3 font-medium">
            Horarios de Culto
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Nuestras Iglesias
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Encuentra el horario de tu iglesia más cercana y únete a la comunidad.
          </p>
        </motion.div>

        {/* Cards de iglesias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {iglesias.map((iglesia, index) => (
            <motion.div
              key={iglesia.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header de la card */}
              <div className="bg-navy px-6 py-5">
                <h3 className="text-white font-bold text-lg">{iglesia.nombre}</h3>
                <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                  <MapPin size={14} />
                  <span>{iglesia.direccion}</span>
                </div>
              </div>

              {/* Info del pastor y anciano */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Pastor</p>
                  <p className="text-navy font-medium text-sm">{iglesia.pastor}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Anciano</p>
                  <p className="text-navy font-medium text-sm">{iglesia.anciano}</p>
                </div>
              </div>

              {/* Cultos */}
              <div className="px-6 py-4 flex flex-col gap-3">
                {iglesia.cultos.map((culto) => (
                  <div
                    key={culto.dia}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <div>
                        <p className="text-navy font-medium text-sm">{culto.dia}</p>
                        <p className="text-gray-400 text-xs">{culto.tipo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue text-sm font-medium">
                      <Clock size={14} />
                      <span>{culto.hora}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
