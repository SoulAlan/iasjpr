import Hero from '@/components/Hero'
import YouthDay from '@/components/YouthDay'
import Schedule from '@/components/Schedule'
import Activities from '@/components/Activities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <YouthDay />
      <Schedule />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
