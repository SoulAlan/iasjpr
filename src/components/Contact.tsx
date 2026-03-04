'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { contacto, redesSociales } from '@/lib/data'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [errores, setErrores] = useState<Record<string, string>>({})

  const validar = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje es requerido'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const erroresValidacion = validar()
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }
    setEnviado(true)
    setErrores({})
  }

  const redes = [
    { icon: <Facebook size={20} />, label: 'Facebook', href: redesSociales.facebook, color: 'hover:bg-blue-600' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: redesSociales.instagram, color: 'hover:bg-pink-600' },
    { icon: <Youtube size={20} />, label: 'YouTube', href: redesSociales.youtube, color: 'hover:bg-red-600' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: `https://wa.me/${redesSociales.whatsapp}`, color: 'hover:bg-green-600' },
  ]

  return (
    <section id="contacto" className="bg-gray-50 py-20 px-6">
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
            Comunícate
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-navy font-semibold text-lg mb-6">Envíanos un mensaje</h3>

            {enviado ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <p className="text-green-700 font-medium">¡Mensaje enviado!</p>
                <p className="text-green-600 text-sm mt-1">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-blue transition-colors ${
                      errores.nombre ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-blue transition-colors ${
                      errores.email ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errores.email && <p className="text-red-500 text-xs mt-1">{errores.email}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="Tu mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-blue transition-colors resize-none ${
                      errores.mensaje ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errores.mensaje && <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-navy text-white rounded-xl py-3 text-sm font-medium hover:bg-blue transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            )}

            {/* Redes sociales */}
            <div className="mt-8">
              <p className="text-navy font-medium text-sm mb-4">Síguenos en redes</p>
              <div className="flex gap-3">
                {redes.map((red) => (
                  <a
                    key={red.label}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.label}
                    className={`bg-gray-100 text-gray-600 ${red.color} hover:text-white rounded-full p-3 transition-all`}
                  >
                    {red.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Info de contacto + mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-navy font-semibold text-lg">Información de contacto</h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-navy/10 rounded-full p-3 text-navy">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Teléfono</p>
                  <p className="text-navy font-medium">{contacto.telefono}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy/10 rounded-full p-3 text-navy">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Correo</p>
                  <p className="text-navy font-medium">{contacto.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy/10 rounded-full p-3 text-navy">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Dirección</p>
                  <p className="text-navy font-medium">{contacto.direccion}</p>
                </div>
              </div>
            </div>

            {/* Mapa embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-1 min-h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30783.34!2d-90.3726!3d14.5502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1b3e1234567%3A0xabc123!2sSan%20Jos%C3%A9%20Pinula%2C%20Guatemala!5e0!3m2!1ses!2sgt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
