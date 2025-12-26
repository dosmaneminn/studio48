import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

function Stats({ stats }) {
    return (
        <section className="stats-bar">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <StatItem key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatItem({ stat, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <>
            {index > 0 && <div className="stat-divider"></div>}
            <motion.div
                ref={ref}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <CountUp value={stat.value} isInView={isInView} />
                <span className="stat-label">{stat.label}</span>
            </motion.div>
        </>
    )
}

function CountUp({ value, isInView }) {
    const ref = useRef(null)

    useEffect(() => {
        if (!isInView || !ref.current) return

        let start = 0
        const duration = 2000
        const step = value / (duration / 16)

        const timer = setInterval(() => {
            start += step
            if (start >= value) {
                start = value
                clearInterval(timer)
            }
            if (ref.current) {
                ref.current.textContent = Math.floor(start)
            }
        }, 16)

        return () => clearInterval(timer)
    }, [value, isInView])

    return <span ref={ref} className="stat-number">0</span>
}

export default Stats
