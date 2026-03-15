import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, ExternalLink, ArrowLeft } from 'lucide-react'

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}
import ClubCarousel from '@/components/ClubCarousel'

export const metadata: Metadata = {
  title: 'Club Luken · Fraijanes',
  description: 'Club de Conquistadores Luken — Iglesia Adventista del Séptimo Día, Fraijanes.',
}

function getImages(): string[] {
  const dir = path.join(process.cwd(), 'public/images/galeria/luken')
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .map((f) => `/images/galeria/luken/${f}`)
  } catch {
    return []
  }
}

export default function LukenPage() {
  const images = getImages()

  return (
    <main
      className="min-h-screen"
      style={{ background: 'linear-gradient(160deg, #060414 0%, #0f0c1a 55%, #0a0f1e 100%)' }}
    >
      {/* Fondo decorativo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse, #F59E0B 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #FBBF24 0%, transparent 70%)' }}
        />
      </div>

      {/* Botón regresar */}
      <div className="relative pt-24 pb-2 px-6 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-400/60 hover:text-amber-400 transition-colors text-sm font-semibold"
        >
          <ArrowLeft size={16} />
          Regresar al inicio
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">

          {/* Logo */}
          <div
            className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6"
            style={{ filter: 'drop-shadow(0 0 20px rgba(245,158,11,0.4))' }}
          >
            <Image
              src="/images/logo_clubes/luken_logo.png"
              alt="Logo Club Luken"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Nombre */}
          <p className="text-amber-400/60 text-xs font-black uppercase tracking-[0.3em] mb-2">
            Conquistadores · Fraijanes
          </p>
          <h1
            className="text-7xl md:text-9xl font-black uppercase tracking-tight leading-none mb-12"
            style={{
              background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 40%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            LUKEN
          </h1>

          {/* Porra */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-12"
            style={{
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.18)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] mb-6" style={{ color: '#F59E0B' }}>
              ¡Porra!
            </p>

            {/* Línea 1 — el "call" */}
            <p className="text-white/50 text-lg md:text-xl font-semibold italic mb-4 leading-relaxed">
              Luken esta aquí brillando con feeee....
            </p>

            {/* Línea 2 — el "response" */}
            <p className="text-2xl md:text-4xl font-black text-white leading-tight">
              Luken esta aquí brillando con{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FBBF24, #F97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                feeeeeeeeee!!!
              </span>
            </p>
          </div>

          {/* Versículo */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold italic text-white/85 mb-3 leading-snug">
              ❝ Somos la luz del mundo ❞
            </p>
            <p className="text-amber-400/70 text-sm font-black uppercase tracking-[0.2em]">
              Mateo 5:14
            </p>
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)' }}
        />
      </div>

      {/* Información / Contacto */}
      <section className="py-16 px-6">
        <p className="text-center text-xs font-black uppercase tracking-[0.25em] mb-8" style={{ color: '#F59E0B' }}>
          Encuéntranos
        </p>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/clubluken.fraijanes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #1877F2, #0C5FCC)' }}
          >
            <FacebookIcon size={20} />
            Facebook
          </a>

          {/* Waze */}
          <a
            href="https://waze.com/ul/h9fxdq0bu8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-bold transition-all hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #F59E0B, #F97316)', color: '#1a0a00' }}
          >
            <ExternalLink size={20} />
            Cómo llegar (Waze)
          </a>
        </div>

        {/* Dirección */}
        <div className="max-w-sm mx-auto flex items-start gap-3 justify-center text-center">
          <MapPin size={16} className="text-amber-400/70 mt-0.5 flex-shrink-0" />
          <p className="text-white/40 text-sm leading-relaxed">
            Iglesia Adventista de Fraijanes<br />
            5ta Calle 1-23 Zona 2, El Tempisque<br />
            <span className="text-white/25 text-xs">(a un costado de Multiservicios Don Paco)</span>
          </p>
        </div>
      </section>

      {/* Galería */}
      {images.length > 0 && (
        <>
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)' }}
            />
          </div>
          <section className="py-16 px-6">
            <p className="text-center text-xs font-black uppercase tracking-[0.25em] mb-10" style={{ color: '#F59E0B' }}>
              Galería
            </p>
            <ClubCarousel images={images} accentColor="#F59E0B" />
          </section>
        </>
      )}

      <div className="h-16" />
    </main>
  )
}
