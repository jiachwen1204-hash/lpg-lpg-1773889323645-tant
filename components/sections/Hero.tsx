import { motion } from 'framer-motion';
import { PawPrint, Heart, Shield, Star, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--color-bg)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="luxury-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#luxury-pattern)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-500)] to-[var(--brand-700)] flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="font-[var(--font-heading)] text-2xl font-bold text-[var(--brand-500)] tracking-tight">
                PiPi Home Boarding
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[var(--color-text)] hover:text-[var(--brand-500)] transition-colors duration-300 text-sm tracking-wide">
                About
              </a>
              <a href="#services" className="text-[var(--color-text)] hover:text-[var(--brand-500)] transition-colors duration-300 text-sm tracking-wide">
                Services
              </a>
              <a href="#testimonials" className="text-[var(--color-text)] hover:text-[var(--brand-500)] transition-colors duration-300 text-sm tracking-wide">
                Reviews
              </a>
              <a href="#contact" className="text-[var(--color-text)] hover:text-[var(--brand-500)] transition-colors duration-300 text-sm tracking-wide">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-[var(--brand-500)] text-white rounded-lg hover:bg-[var(--brand-700)] transition-all duration-300 text-sm font-medium tracking-wide shadow-lg shadow-[var(--brand-500)]/20">
              <span>Book Your Stay</span>
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[var(--color-text)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--brand-500)]/10 rounded-full mb-8"
            >
              <Star className="w-4 h-4 text-[var(--brand-500)]" />
              <span className="text-sm text-[var(--brand-500)] font-medium tracking-wide">
                Premium Home-Based Pet Care
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-[1.1] mb-6"
            >
              Where Your Pet's{' '}
              <span className="text-[var(--brand-500)]">Comfort</span>{' '}
              Meets{' '}
              <span className="text-[var(--brand-500)]">Elegant Care</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl"
            >
              A loving home-based pet boarding service that provides a safe, comfortable, and stress-free stay for your furry family members. We treat every pet like family.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-500)] text-white rounded-xl hover:bg-[var(--brand-700)] transition-all duration-300 text-base font-medium tracking-wide shadow-xl shadow-[var(--brand-500)]/25 hover:shadow-[var(--brand-500)]/40">
                <span>Book Your Stay</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl hover:border-[var(--brand-500)] hover:text-[var(--brand-500)] transition-all duration-300 text-base font-medium tracking-wide">
                <Phone className="w-5 h-5" />
                <span>Schedule a Tour</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--brand-500)]" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-[var(--color-muted)]">5.0 Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-text)]">100+</p>
                <p className="text-xs text-[var(--color-muted)]">Happy Pets</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-text)]">24/7</p>
                <p className="text-xs text-[var(--color-muted)]">Care & Attention</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-[var(--brand-500)]/20 to-[var(--brand-700)]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[var(--brand-500)]/10 flex items-center justify-center">
                      <PawPrint className="w-16 h-16 text-[var(--brand-500)]" />
                    </div>
                    <p className="font-[var(--font-heading)] text-xl text-[var(--color-muted)] italic">
                      "A Home Away From Home"
                    </p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border border-[var(--brand-500)]/20 rounded-full" />
                <div className="absolute bottom-4 right-4 w-32 h-32 border border-[var(--brand-500)]/20 rounded-full" />
              </div>
            </div>

            {/* Floating Card - Feature 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 lg:-left-8 top-1/4 bg-[var(--color-surface)] rounded-xl p-4 shadow-xl border border-[var(--color-border)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-500)]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[var(--brand-500)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">Personal Attention</p>
                  <p className="text-xs text-[var(--color-muted)]">One-on-one care</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Feature 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-4 lg:-right-8 bottom-1/4 bg-[var(--color-surface)] rounded-xl p-4 shadow-xl border border-[var(--color-border)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-500)]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[var(--brand-500)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">Safe & Secure</p>
                  <p className="text-xs text-[var(--color-muted)]">Trusted environment</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section - Contact Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <a href="tel:+60123456789" className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--brand-500)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact us for availability</span>
              </a>
              <div className="hidden lg:block w-px h-4 bg-[var(--color-border)]" />
              <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <MapPin className="w-4 h-4" />
                <span>Taman Desa Cheras, Kuala Lumpur</span>
              </div>
              <div className="hidden lg:block w-px h-4 bg-[var(--color-border)]" />
              <a href="mailto:jiachwen99@gmail.com" className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--brand-500)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>jiachwen99@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-[var(--color-muted)]">Follow us:</span>
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--brand-500)] hover:bg-[var(--brand-500)]/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--brand-500)] hover:bg-[var(--brand-500)]/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--color-muted)] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}