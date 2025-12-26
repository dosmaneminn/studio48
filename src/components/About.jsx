import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

function About({ about }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="about" id="about" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-tag">Hakkımızda</span>
                        <h2 className="section-title">
                            {about.title.split(' ')[0]} <span className="accent">{about.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="about-text">{about.description}</p>

                        <div className="about-features">
                            {about.features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    className="about-feature"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <a href="#contact" className="btn btn-primary">Ziyaret Et</a>
                    </motion.div>

                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-image-wrapper">
                            <img
                                src="/images/gym-interior.png"
                                alt="Studio48 CrossFit Gym İç Mekan"
                                className="about-img"
                                loading="lazy"
                            />
                            <div className="about-image-accent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
