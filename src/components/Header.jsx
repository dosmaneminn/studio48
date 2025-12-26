import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

function Header({ siteInfo }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#home', label: 'Ana Sayfa' },
        { href: '#about', label: 'Hakkımızda' },
        { href: '#schedule', label: 'Program' },
        { href: '#trainers', label: 'Ekip' },
        { href: '#contact', label: 'İletişim' },
    ]

    const handleNavClick = () => {
        setMenuOpen(false)
        document.body.style.overflow = ''
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        document.body.style.overflow = menuOpen ? '' : 'hidden'
    }

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <a href="#home" className="logo">
                    <span className="logo-text">STUDIO</span>
                    <span className="logo-accent">48</span>
                </a>

                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="nav-link"
                                    onClick={handleNavClick}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="btn btn-primary header-cta">
                    Başla
                </a>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menüyü aç"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
