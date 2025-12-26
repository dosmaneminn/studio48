import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Schedule.css'

function Schedule({ schedule }) {
    const [activeTab, setActiveTab] = useState('weekday')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="schedule" id="schedule" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Program</span>
                    <h2 className="section-title">Haftalık <span className="accent">Ders Programı</span></h2>
                </div>

                <div className="schedule-tabs">
                    <button
                        className={`schedule-tab ${activeTab === 'weekday' ? 'active' : ''}`}
                        onClick={() => setActiveTab('weekday')}
                    >
                        Hafta İçi
                    </button>
                    <button
                        className={`schedule-tab ${activeTab === 'weekend' ? 'active' : ''}`}
                        onClick={() => setActiveTab('weekend')}
                    >
                        Hafta Sonu
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="schedule-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {schedule[activeTab].map((item, index) => (
                            <motion.div
                                key={`${item.time}-${item.name}`}
                                className="schedule-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
                            >
                                <span className="schedule-time">{item.time}</span>
                                <div className="schedule-info">
                                    <span className={`schedule-type ${item.type}`}>{item.name}</span>
                                    <span className="schedule-duration">{item.duration}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className="schedule-legend">
                    <div className="legend-item"><span className="legend-dot wod"></span>WOD</div>
                    <div className="legend-item"><span className="legend-dot strength"></span>Strength</div>
                    <div className="legend-item"><span className="legend-dot mobility"></span>Mobility</div>
                    <div className="legend-item"><span className="legend-dot open"></span>Open Gym</div>
                </div>
            </div>
        </section>
    )
}

export default Schedule
