import { useEffect, useMemo, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import PortfolioLinks from './components/sections/PortfolioLinks'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Navbar from './components/layout/Navbar'
import MobileMenu from './components/layout/MobileMenu'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/layout/ScrollToTopButton'
import { portfolioData } from './data/portfolioData'
import { useActiveSection } from './hooks/useActiveSection'

gsap.registerPlugin(ScrollTrigger)

const sectionOrder = [
  'home',
  'about',
  'skills',
  'experience',
  'contact',
]

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionOrder)

  const navLinks = useMemo(
    () =>
      sectionOrder.map((sectionId) => ({
        id: sectionId,
        label: portfolioData.sections[sectionId].label,
      })),
    [],
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.from('.navbar', {
        y: -36,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'transform',
      })

      gsap.from('.hero-animate', {
        y: 26,
        opacity: 0,
        duration: 0.78,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform',
      })

      gsap.utils.toArray('.gsap-reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.82,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
              once: true,
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="app-shell">
      <Navbar
        links={navLinks}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'))}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <AnimatePresence>
        <MobileMenu
          isOpen={isMenuOpen}
          links={navLinks}
          activeSection={activeSection}
          onClose={() => setIsMenuOpen(false)}
        />
      </AnimatePresence>

      <main className="main-content">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <PortfolioLinks data={portfolioData.portfolioLinks} />
        <Education data={portfolioData.education} />
        <Contact data={portfolioData.contact} />
      </main>

      <Footer data={portfolioData.footer} />
      <ScrollToTopButton />
    </div>
  )
}

export default App
