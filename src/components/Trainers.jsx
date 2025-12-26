import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Trainers.css'

function Trainers({ trainers }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="trainers" id="trainers" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Ekip</span>
                    <h2 className="section-title">Uzman <span className="accent">Antrenörler</span></h2>
                </div>

                <div className="trainers-grid">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            className="trainer-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, borderColor: 'var(--color-accent)' }}
                        >
                            <div className="trainer-image">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="trainer-img"
                                    loading="lazy"
                                />
                            </div>
                            <div className="trainer-info">
                                <h3>{trainer.name}</h3>
                                <span className="trainer-role">{trainer.role}</span>
                                <p>{trainer.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Trainers
