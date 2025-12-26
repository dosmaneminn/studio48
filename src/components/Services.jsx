import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Services.css'

function Services({ services }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const icons = {
        crossfit: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="3" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="5" y1="20" x2="9" y2="16" />
                <line x1="19" y1="20" x2="15" y2="16" />
            </svg>
        ),
        boxing: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 17v-5a8 8 0 0 1 16 0v5" />
                <rect x="4" y="14" width="16" height="6" rx="2" />
                <line x1="8" y1="17" x2="8" y2="17.01" />
                <line x1="16" y1="17" x2="16" y2="17.01" />
            </svg>
        ),
        pilates: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v3" />
                <path d="M8 14c0-2 1.5-4 4-4s4 2 4 4" />
                <path d="M6 22l3-8" />
                <path d="M18 22l-3-8" />
            </svg>
        )
    }

    return (
        <section className="services" id="services" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Dersler</span>
                    <h2 className="section-title">Ne <span className="accent">Sunuyoruz?</span></h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-image">
                                {service.image ? (
                                    <img src={service.image} alt={service.name} loading="lazy" />
                                ) : (
                                    <div className="service-placeholder">
                                        <p>[ GÖRSEL: {service.name} dersi ]</p>
                                    </div>
                                )}
                                <div className="service-overlay">
                                    <div className="service-icon">
                                        {icons[service.icon]}
                                    </div>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                                <div className="service-features">
                                    {service.features.map((feature, i) => (
                                        <span key={i} className="service-tag">{feature}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
