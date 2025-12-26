import './Footer.css'

function Footer({ siteInfo }) {
    const navItems = [
        { href: '#home', label: 'Ana Sayfa' },
        { href: '#about', label: 'Hakkımızda' },
        { href: '#schedule', label: 'Program' },
        { href: '#contact', label: 'İletişim' },
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            <span className="logo-text">STUDIO</span>
                            <span className="logo-accent">48</span>
                        </a>
                        <p>{siteInfo.tagline}</p>
                    </div>
                    <div className="footer-links">
                        {navItems.map(item => (
                            <a key={item.href} href={item.href}>{item.label}</a>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Studio48 CrossFit. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
