import { motion } from 'framer-motion'
import './CTA.css'

function CTA() {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>İlk Dersin Bizden</h2>
                    <p>Ücretsiz deneme dersine katıl, CrossFit ailesine katıl.</p>
                    <a href="#contact" className="btn btn-primary btn-lg">Hemen Başla</a>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
