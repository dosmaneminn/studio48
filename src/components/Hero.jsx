import { motion } from 'framer-motion'
import './Hero.css'

function Hero({ siteInfo }) {
    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="hero-particles"></div>
                <div className="hero-gradient"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    CrossFit Affiliate
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="hero-title-line">SINIRLARINI</span>
                    <span className="hero-title-line accent">AŞ</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Profesyonel antrenörler eşliğinde dönüşümünü başlat.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a href="#contact" className="btn btn-primary">Ücretsiz Deneme</a>
                    <a href="#schedule" className="btn btn-ghost">Program</a>
                </motion.div>
            </div>

            <div className="hero-scroll">
                <span className="hero-scroll-text">Keşfet</span>
                <div className="hero-scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
