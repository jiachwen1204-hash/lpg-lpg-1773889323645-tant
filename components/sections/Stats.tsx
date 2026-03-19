import { useEffect, useRef, useState } from 'react';
import { Heart, Award, Users, Star, Clock, Home } from 'lucide-react';

const stats = [
  {
    icon: Heart,
    value: 2500,
    suffix: '+',
    label: 'Happy Pets Cared For',
    description: 'Furry friends have found comfort with us'
  },
  {
    icon: Award,
    value: 8,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Trusted expertise in pet care'
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    description: 'From our loving pet parents'
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Dedicated Care',
    description: 'Round-the-clock attention for your pets'
  },
  {
    icon: Home,
    value: 100,
    suffix: '%',
    label: 'Home-Like Environment',
    description: 'No stress, just comfort and love'
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Happy Pet Parents',
    description: 'Would recommend to others'
  }
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <span className="font-heading text-5xl md:text-6xl lg:text-7xl text-[var(--brand-700)]">
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-36 bg-[var(--surface)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[var(--brand-500)] text-sm md:text-base font-medium tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
            Our Excellence
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[var(--text)] leading-tight opacity-0 animate-fade-up animation-delay-100">
            Numbers That Speak
            <span className="block text-[var(--brand-700)]">to Our Dedication</span>
          </h2>
          <p className="mt-6 text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto font-body opacity-0 animate-fade-up animation-delay-200">
            Every statistic represents a wagging tail, a purring companion, and a pet parent who trusted us with their family member.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-[var(--bg)] rounded-xl p-8 md:p-10 border border-[var(--border)] hover:border-[var(--brand-500)] transition-all duration-500 hover:shadow-xl hover:shadow-[var(--brand-500)]/10"
                style={{ opacity: 0, animation: `fade-up 0.6s ease-out ${index * 0.1}s forwards` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-500)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--brand-500)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-500)]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[var(--brand-500)]" strokeWidth={1.5} />
                  </div>

                  <div className="mb-4">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl text-[var(--text)] mb-2">
                    {stat.label}
                  </h3>

                  <p className="font-body text-[var(--muted)] text-sm md:text-base">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[var(--text)] rounded-full">
            <span className="text-[var(--surface)] font-body text-sm md:text-base">
              Join our family of happy pet parents
            </span>
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--brand-500)] hover:bg-[var(--brand-700)] text-[var(--surface)] font-body font-medium text-sm rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}