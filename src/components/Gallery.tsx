'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galeria } from '@/lib/data'

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const prev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + galeria.length) % galeria.length)
  }

  const next = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % galeria.length)
  }

  return (
    <section id="galeria" className="bg-white py-20 px-6">
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
            Momentos
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">Galería</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        </motion.div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galeria.map((imagen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={imagen.url}
                alt={imagen.descripcion}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity duration-300">
                  {imagen.descripcion}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Contenido del lightbox */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeria[selectedIndex].url}
                alt={galeria[selectedIndex].descripcion}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Botón anterior */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Caption */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {galeria[selectedIndex].descripcion}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
