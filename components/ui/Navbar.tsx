import { useState, useEffect } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <PawPrint
                className="w-8 h-8 text-brand-500 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl lg:text-2xl tracking-wide"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-500)' }}
              >
                PiPi Home Boarding
              </span>
              <span
                className="text-xs tracking-widest hidden sm:block"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)' }}
              >
                A HOME AWAY FROM HOME
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="text-sm tracking-wide transition-colors duration-300 hover:text-brand-500" style={{ color: 'var(--text)' }}>
                  {link.label}
                </span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: 'var(--brand-500)' }}
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#book"
              className="px-8 py-3 text-sm tracking-wide transition-all duration-300 hover:shadow-lg"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--brand-500)',
                color: 'white',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-700)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-500)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Your Stay
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-colors duration-300 hover:bg-stone-100 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--text)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--text)' }} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen border-b' : 'max-h-0'
        }`}
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-base tracking-wide transition-colors duration-300 hover:text-brand-500"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text)',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                transition: `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s, color 0.3s ease`,
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            <a
              href="#book"
              className="block w-full py-4 text-center text-sm tracking-wide transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--brand-500)',
                color: 'white',
                borderRadius: '4px',
              }}
              onClick={() => setIsOpen(false)}
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}