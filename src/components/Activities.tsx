'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, MapPin, User } from 'lucide-react'
import { actividades } from '@/lib/data'

export default function Activities() {
  return (
    <section id="actividades" className="bg-gray-50 py-20 px-6">
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
            Próximos Eventos
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
            Actividades
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Mantente al día con las actividades y eventos del distrito.
          </p>
        </motion.div>

        {/* Cards de actividades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {actividades.map((actividad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Banda superior dorada con fecha */}
              <div className="bg-gold px-6 py-3 flex items-center gap-3">
                <Calendar size={16} className="text-navy" />
                <span className="text-navy font-semibold text-sm">{actividad.fecha}</span>
              </div>

              <div className="p-6">
                <h3 className="text-navy font-bold text-xl mb-4">{actividad.nombre}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{actividad.descripcion}</p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock size={15} className="text-blue flex-shrink-0" />
                    <span>{actividad.hora}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin size={15} className="text-blue flex-shrink-0" />
                    <span>{actividad.iglesiaResponsable}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <User size={15} className="text-blue flex-shrink-0" />
                    <span>
                      Pastor <strong className="text-navy">{actividad.pastor.nombre}</strong>
                      {' · '}Anciano <strong className="text-navy">{actividad.anciano}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={15} className="text-blue flex-shrink-0" />
                    <a
                      href={`tel:${actividad.telefono}`}
                      className="hover:text-blue transition-colors"
                    >
                      {actividad.telefono}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
