import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, ArrowLeft } from 'lucide-react'
import ClubCarousel from '@/components/ClubCarousel'

export const metadata: Metadata = {
  title: 'Club Judá · Santa Catarina Pinula',
  description: 'Club de Conquistadores Judá — Iglesia Adventista, Santa Catarina Pinula.',
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

function getImages(): string[] {
  const dir = path.join(process.cwd(), 'public/images/galeria/juda')
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .map((f) => `/images/galeria/juda/${f}`)
  } catch {
    return []
  }
}

export default function JudaPage() {
  const images = getImages()

  return (
    <main
      className="min-h-screen"
      style={{ background: 'linear-gradient(160deg, #0a0400 0%, #160900 55%, #0f0600 100%)' }}
    >
      {/* Fondo decorativo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse, #F97316 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #EAB308 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
        />
      </div>

      {/* Botón regresar */}
      <div className="relative pt-24 pb-2 px-6 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors text-sm font-semibold"
          style={{ color: 'rgba(249,115,22,0.6)' }}
        >
          <ArrowLeft size={16} />
          Regresar al inicio
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">

          {/* Logo — contenedor con fondo cálido para difuminar bordes blancos */}
          <div
            className="relative mx-auto mb-6 rounded-2xl overflow-hidden"
            style={{
              width: '96px',
              height: '96px',
              background: 'radial-gradient(circle, #2a1000 30%, #0f0600 100%)',
              filter: 'drop-shadow(0 0 24px rgba(249,115,22,0.5))',
            }}
          >
            <Image
              src="/images/logo_clubes/LOGO_CLUB_JUDÁ-removebg-preview.png"
              alt="Logo Club Judá"
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Subtítulo */}
          <p
            className="text-xs font-black uppercase tracking-[0.3em] mb-2"
            style={{ color: 'rgba(249,115,22,0.6)' }}
          >
            Conquistadores · Santa Catarina Pinula
          </p>

          {/* Nombre */}
          <h1
            className="text-7xl md:text-9xl font-black uppercase tracking-tight leading-none mb-6"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #EAB308 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            JUDÁ
          </h1>

          {/* Lema */}
          <p className="text-white/65 text-base md:text-lg font-semibold italic mb-12">
            ❝ Leones de Judá al servicio de Jehová ❞
          </p>

          {/* Versículo */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-8"
            style={{
              background: 'rgba(249,115,22,0.07)',
              border: '1px solid rgba(249,115,22,0.18)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] mb-5 text-center" style={{ color: '#F97316' }}>
              — Apocalipsis 14:12 —
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed text-center italic">
              "Aquí está la paciencia de los santos, los que guardan los mandamientos de Dios y la fe de Jesús."
            </p>
          </div>

          {/* Director */}
          <p className="text-white/30 text-sm">
            Director:{' '}
            <span className="text-white/60 font-semibold">Ricardo Juárez</span>
          </p>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.35), transparent)' }}
        />
      </div>

      {/* Contacto */}
      <section className="py-16 px-6">
        <p
          className="text-center text-xs font-black uppercase tracking-[0.25em] mb-8"
          style={{ color: '#F97316' }}
        >
          Encuéntranos
        </p>

        <div className="max-w-xl mx-auto flex justify-center mb-8">
          <a
            href="https://www.facebook.com/club.juda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #1877F2, #0C5FCC)' }}
          >
            <FacebookIcon size={20} />
            Síguenos en Facebook
          </a>
        </div>

        <div className="max-w-sm mx-auto flex items-start gap-3 justify-center text-center">
          <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'rgba(249,115,22,0.7)' }} />
          <p className="text-white/40 text-sm leading-relaxed">
            Aldea el Pajón, Callejón el Riíto, lote 158 A<br />
            Santa Catarina Pinula
          </p>
        </div>
      </section>

      {/* Galería */}
      {images.length > 0 && (
        <>
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.35), transparent)' }}
            />
          </div>
          <section className="py-16 px-6">
            <p
              className="text-center text-xs font-black uppercase tracking-[0.25em] mb-10"
              style={{ color: '#F97316' }}
            >
              Galería
            </p>
            <ClubCarousel images={images} accentColor="#F97316" />
          </section>
        </>
      )}

      <div className="h-16" />
    </main>
  )
}
