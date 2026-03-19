import { Home, Heart, Utensils, Activity, Shield, Camera } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Home-Based Boarding",
    description: "A cozy, nurturing environment where your pet relaxes in a real home setting, far from the stress of crowded kennels."
  },
  {
    icon: Heart,
    title: "Personalized Attention",
    description: "Dedicated one-on-one care tailored to your pet's unique personality, preferences, and daily routines."
  },
  {
    icon: Utensils,
    title: "Feeding Management",
    description: "We follow your pet's exact dietary schedule and requirements, including special diets and medications."
  },
  {
    icon: Activity,
    title: "Playtime & Exercise",
    description: "Structured play sessions and gentle exercise to keep your companion happy, healthy, and engaged throughout their stay."
  },
  {
    icon: Shield,
    title: "Safe & Secure Space",
    description: "A clean, sanitized, and fully pet-proofed environment with supervised outdoor play in our secure premises."
  },
  {
    icon: Camera,
    title: "Daily Photo Updates",
    description: "Receive regular photo updates and detailed reports, giving you complete peace of mind while you're away."
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-sm font-medium tracking-widest uppercase text-[var(--brand500)] mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[var(--text)] mb-6 leading-tight">
            Elegant Care for<br />Your Cherished Companions
          </h2>
          <p className="text-lg text-[var(--muted)] font-body leading-relaxed">
            Every pet deserves the warmth of home and the tenderness of family. 
            At PiPi Home Boarding, we provide a sanctuary where your furry family members 
            receive the attentive, dignified care they deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-[var(--surface)] rounded-xl p-8 lg:p-10 border border-[var(--border)] transition-all duration-500 hover:border-[var(--brand500)] hover:shadow-2xl hover:shadow-[var(--brand500)]/5"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--brand500)]/10 text-[var(--brand500)] group-hover:bg-[var(--brand500)] group-hover:text-white transition-all duration-500">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl text-[var(--text)] mb-4 group-hover:text-[var(--brand500)] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[var(--muted)] font-body leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--brand500)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <div className="inline-flex flex-col items-center p-10 md:p-14 bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-lg shadow-[var(--text)]/5">
            <p className="font-heading text-2xl md:text-3xl text-[var(--text)] mb-6">
              Ready to Experience Premium Pet Care?
            </p>
            <p className="text-[var(--muted)] font-body mb-8 max-w-lg">
              Give your pet the gift of a loving home away from home. 
              Book their stay with us today.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-3 bg-[var(--brand500)] hover:bg-[var(--brand700)] text-white font-body font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--brand500)]/30"
            >
              Book Your Stay
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}