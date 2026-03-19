import { Instagram, Facebook, Mail, MapPin, Phone, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Brand Column */}
            <div className="max-w-md">
              <h3 className="font-serif text-3xl lg:text-4xl text-rose-400 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                PiPi Home Boarding
              </h3>
              <p className="font-serif text-lg text-stone-500 italic mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Where Your Pet's Comfort Meets Elegant Care
              </p>
              <p className="text-stone-600 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                A home away from home for your beloved companions. We provide loving, personalized care in a cozy environment where pets receive the attention and affection they deserve.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Heart className="w-5 h-5" />
                Book Your Stay
              </a>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              
              {/* Quick Links */}
              <div>
                <h4 className="font-serif text-lg text-stone-800 mb-6 pb-2 border-b border-stone-200" style={{ fontFamily: 'var(--font-heading)' }}>
                  Quick Links
                </h4>
                <ul className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
                  {['Home', 'About Us', 'Our Services', 'Gallery', 'Testimonials'].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-stone-500 hover:text-rose-500 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-serif text-lg text-stone-800 mb-6 pb-2 border-b border-stone-200" style={{ fontFamily: 'var(--font-heading)' }}>
                  Contact Us
                </h4>
                <ul className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-500 text-sm">
                      31&33, Jalan 5/154d,<br />
                      Taman Desa Cheras,<br />
                      56000, Cheras W.P. Kuala Lumpur
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <a
                      href="mailto:jiachwen99@gmail.com"
                      className="text-stone-500 hover:text-rose-500 transition-colors duration-200 text-sm"
                    >
                      jiachwen99@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-stone-500 text-sm">By Appointment</span>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="mt-8">
                  <h5 className="text-stone-700 text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                    Follow Our Journey
                  </h5>
                  <div className="flex gap-3">
                    <a
                      href="#instagram"
                      className="w-10 h-10 rounded-full bg-stone-100 hover:bg-rose-100 flex items-center justify-center transition-colors duration-200 group"
                    >
                      <Instagram className="w-5 h-5 text-stone-500 group-hover:text-rose-500 transition-colors" />
                    </a>
                    <a
                      href="#facebook"
                      className="w-10 h-10 rounded-full bg-stone-100 hover:bg-rose-100 flex items-center justify-center transition-colors duration-200 group"
                    >
                      <Facebook className="w-5 h-5 text-stone-500 group-hover:text-rose-500 transition-colors" />
                    </a>
                    <a
                      href="mailto:jiachwen99@gmail.com"
                      className="w-10 h-10 rounded-full bg-stone-100 hover:bg-rose-100 flex items-center justify-center transition-colors duration-200 group"
                    >
                      <Mail className="w-5 h-5 text-stone-500 group-hover:text-rose-500 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 pb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-300"></div>
          <div className="w-2 h-2 rounded-full bg-rose-300"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-300"></div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-stone-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              © {new Date().getFullYear()} PiPi Home Boarding. Zhen fatt sdh bhd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-stone-400 hover:text-rose-500 text-sm transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                Privacy Policy
              </a>
              <a href="#terms" className="text-stone-400 hover:text-rose-500 text-sm transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-50"></div>
    </footer>
  );
}