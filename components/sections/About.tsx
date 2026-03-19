import { Heart, Shield, Home, Star } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Home,
      title: 'Home-Like Environment',
      description: 'A cozy, nurturing space where pets feel safe and comfortable, far from the stress of crowded facilities.'
    },
    {
      icon: Heart,
      title: 'Personalized Attention',
      description: 'Individual care tailored to your pet\'s unique needs, routines, and preferences for their stay.'
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'A safe, clean environment where your furry family members are treated like our own pets.'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Sophisticated care that combines elegance with genuine affection for every guest.'
    }
  ];

  return (
    <section className="relative bg-[var(--bg)] py-24 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-[var(--border)]" />
      <div className="absolute top-40 -right-32 w-64 h-64 rounded-full bg-[var(--brand500)]/5 blur-3xl" />
      <div className="absolute bottom-40 -left-32 w-64 h-64 rounded-full bg-[var(--brand500)]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-[var(--brand500)] text-sm font-medium tracking-widest uppercase mb-4 font-['DM_Sans']">
            Our Story
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[var(--text)] font-bold leading-tight mb-6">
            A Home Away From Home
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[var(--muted)] leading-relaxed">
            Where Your Pet's Comfort Meets Elegant Care
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-24">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[var(--text)] font-semibold mb-6">
              Loving Care in a Warm, Home Setting
            </h3>
            <div className="space-y-5">
              <p className="font-['DM_Sans'] text-[var(--muted)] leading-relaxed">
                PiPi Home Boarding is a loving home-based pet boarding service that provides a safe, comfortable, and stress-free stay for your furry family members while you're away. We offer a cozy home environment where pets receive personal attention, proper care, and plenty of affection — just like they would at home.
              </p>
              <p className="font-['DM_Sans'] text-[var(--muted)] leading-relaxed">
                Unlike crowded pet hotels, our home boarding reduces anxiety and ensures pets can relax, play, and rest in a clean and secure space. We follow each pet's routine closely, including feeding schedules, playtime, and rest, so they feel happy and cared for throughout their stay.
              </p>
              <p className="font-['DM_Sans'] text-[var(--brand700)] font-medium leading-relaxed">
                At PiPi Home Boarding, we treat every pet like family and give owners peace of mind knowing their companions are in safe, loving hands.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--surface)] shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand500)]/20 to-[var(--brand700)]/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--surface)]/50 backdrop-blur-sm flex items-center justify-center">
                    <Home className="w-12 h-12 text-[var(--brand500)]" />
                  </div>
                  <p className="font-['Playfair_Display'] text-2xl text-[var(--text)] font-semibold mb-2">
                    PiPi Home Boarding
                  </p>
                  <p className="font-['DM_Sans'] text-sm text-[var(--muted)]">
                    Est. with Love
                  </p>
                </div>
              </div>
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-xl border border-[var(--border)]" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[var(--surface)] rounded-lg shadow-xl p-4 border border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--brand500)]/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[var(--brand500)]" />
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-sm font-semibold text-[var(--text)]">
                    Pet-First Approach
                  </p>
                  <p className="font-['DM_Sans'] text-xs text-[var(--muted)]">
                    Every pet matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16 md:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[var(--text)] font-semibold mb-4">
              The PiPi Promise
            </h3>
            <p className="font-['DM_Sans'] text-[var(--muted)]">
              Four pillars of exceptional care that set us apart
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--brand500)]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--brand500)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--brand500)]/20 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-[var(--brand500)]" />
                </div>
                <h4 className="font-['Playfair_Display'] text-lg text-[var(--text)] font-semibold mb-3">
                  {value.title}
                </h4>
                <p className="font-['DM_Sans'] text-sm text-[var(--muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact Card */}
        <div className="bg-[var(--surface)] rounded-xl p-8 md:p-10 border border-[var(--border)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[var(--text)] font-semibold mb-3">
                Visit Our Home
              </h3>
              <p className="font-['DM_Sans'] text-[var(--muted)] mb-4">
                31&33, Jalan 5/154d, Taman Desa Cheras, 56000, Cheras W.P. Kuala Lumpur
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--brand500)]" />
                <span className="font-['DM_Sans'] text-sm text-[var(--muted)]">
                  Zhen Fatt Sdn Bhd
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="mailto:jiachwen99@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[var(--brand500)] text-white font-['DM_Sans'] font-medium px-6 py-3 rounded-lg hover:bg-[var(--brand700)] transition-colors duration-300"
              >
                <span>Get In Touch</span>
              </a>
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 bg-[var(--text)] text-white font-['DM_Sans'] font-medium px-6 py-3 rounded-lg hover:bg-[var(--text)]/90 transition-colors duration-300"
              >
                <span>Book Your Stay</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}