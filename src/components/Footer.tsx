import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { redesSociales } from '@/lib/data'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Juventud', href: '#juventud' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

const redes = [
  { icon: <Facebook size={18} />, href: redesSociales.facebook, label: 'Facebook' },
  { icon: <Instagram size={18} />, href: redesSociales.instagram, label: 'Instagram' },
  { icon: <Youtube size={18} />, href: redesSociales.youtube, label: 'YouTube' },
  { icon: <MessageCircle size={18} />, href: `https://wa.me/${redesSociales.whatsapp}`, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Columna 1 — Identidad */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              <span className="text-gold">✦</span> Distrito SJP
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Iglesia Adventista del Séptimo Día<br />
              Distrito San José Pinula, Guatemala
            </p>
          </div>

          {/* Columna 2 — Links rápidos */}
          <div>
            <h4 className="text-white/70 text-xs uppercase tracking-widest mb-4">
              Links rápidos
            </h4>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Redes */}
          <div>
            <h4 className="text-white/70 text-xs uppercase tracking-widest mb-4">
              Redes Sociales
            </h4>
            <div className="flex gap-3">
              {redes.map((red) => (
                <a
                  key={red.label}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.label}
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  {red.icon}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-white/30 text-xs">
                "Que nadie te menosprecie por ser joven."
              </p>
              <p className="text-gold/60 text-xs mt-1">1 Timoteo 4:12</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Distrito Adventista San José Pinula. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Iglesia Adventista del Séptimo Día
          </p>
        </div>
      </div>
    </footer>
  )
}
