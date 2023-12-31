'use client'
import Styles from './styles/home.scss'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Study from '@/components/Study'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      }),
    )
    observer.observe(document.querySelector('div.skills-container'))
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })
  }, [])
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Study />
      <Contact />
        <ScrollToTop />
      <Footer />
    </main>
  )
}
