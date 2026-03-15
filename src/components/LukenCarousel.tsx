'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function LukenCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="relative aspect-video rounded-3xl overflow-hidden"
        style={{ boxShadow: '0 0 60px rgba(245,158,11,0.25)' }}
      >
        <Image
          src={images[current]}
          alt={`Foto ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Foto ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? '#F59E0B' : 'rgba(255,255,255,0.4)',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p className="text-center text-white/25 text-xs mt-3 tabular-nums">
        {current + 1} / {images.length}
      </p>
    </div>
  )
}
