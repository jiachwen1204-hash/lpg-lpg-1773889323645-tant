import React from 'react';
import { ArrowRight, Heart, Shield, Star, Home } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-36 overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-32 -right-32 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--brand-500)', opacity: '0.08' }}
        />
        <div 
          className="absolute -bottom-32 -left-32 w-72 h-72 md:w-80 md:h-80 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--brand-500)', opacity: '0.06' }}
        />
      </div>

      {/* Border accent top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--border)' }} />

      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        {/* Elegant Icon Row */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 md:w-12 h-px" style={{ backgroundColor: 'var(--brand-500)' }} />
          <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Home className="w-4 h-4" style={{ color: 'var(--brand-500)' }} strokeWidth={1.5} />
          </div>
          <div className="w-10 md:w-12 h-px" style={{ backgroundColor: 'var(--brand-500)' }} />
        </div>

        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight"
          style={{ 
            fontFamily: 'var(--font-heading)',
            color: 'var(--text)'
          }}
        >
          A Home Away From Home
          <br />
          <span style={{ color: 'var(--brand-500)' }}>For Your Beloved Companion</span>
        </h2>

        {/* Subtext */}
        <p 
          className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ 
            fontFamily: 'var(--font-body)',
            color: 'var(--muted)'
          }}
        >
          At PiPi Home Boarding, we treat every pet like family. Give your furry friend the loving, personalized care they deserve while you're away.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" style={{ color: 'var(--brand-500)' }} strokeWidth={2} fill="currentColor" />
            <span className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
              Personal Attention
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" style={{ color: 'var(--brand-500)' }} strokeWidth={2} />
            <span className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
              Safe & Secure
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" style={{ color: 'var(--brand-500)' }} strokeWidth={2} fill="currentColor" />
            <span className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
              Premium Care
            </span>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col items-center">
          <button
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ 
              backgroundColor: 'var(--brand-500)',
              color: 'white'
            }}
          >
            <span className="relative z-10" style={{ fontFamily: 'var(--font-body)' }}>
              Book Your Stay
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundColor: 'var(--brand-700)' }}
            />
          </button>

          {/* Contact alternative */}
          <p 
            className="mt-6 text-sm"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
          >
            Ready to schedule a visit?{' '}
            <a 
              href="mailto:jiachwen99@gmail.com" 
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: 'var(--brand-500)' }}
            >
              Contact us
            </a>
            {' '}— we'd love to meet you and your pet.
          </p>
        </div>

        {/* Location Badge */}
        <div 
          className="inline-flex items-center gap-2 mt-10 px-4 py-2 rounded-full text-xs"
          style={{ 
            backgroundColor: 'var(--surface)', 
            border: '1px solid var(--border)',
            fontFamily: 'var(--font-body)',
            color: 'var(--muted)'
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--brand-500)' }} />
          Serving pet owners in Cheras, Kuala Lumpur
        </div>
      </div>
    </section>
  );
}