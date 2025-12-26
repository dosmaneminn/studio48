import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import siteData from './data/siteData.json'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="preloader-inner">
              <span className="preloader-logo">
                STUDIO<span>48</span>
              </span>
              <div className="preloader-bar"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Header siteInfo={siteData.siteInfo} />
      <main>
        <Hero siteInfo={siteData.siteInfo} />
        <Stats stats={siteData.stats} />
        <About about={siteData.about} />
        <Schedule schedule={siteData.schedule} />
        <Trainers trainers={siteData.trainers} />
        <CTA />
        <Contact siteInfo={siteData.siteInfo} />
      </main>
      <Footer siteInfo={siteData.siteInfo} />
    </>
  )
}

export default App
