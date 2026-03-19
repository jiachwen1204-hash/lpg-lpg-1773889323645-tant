import { Star, PawPrint, Heart, Shield, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Leaving Mochi at PiPi was the best decision we made for our Bali trip. The personal attention and updates gave us complete peace of mind. Mochi came back happy and well-cared for.",
    author: "Sarah Chen",
    pet: "Mochi",
    petType: "Shiba Inu",
    rating: 5,
  },
  {
    id: 2,
    content: "As anxious pet owners, we couldn't be happier with PiPi Home Boarding. They followed Bella's dietary needs precisely and sent us daily photos. It truly feels like a home away from home.",
    author: "Marcus & Lily Tan",
    pet: "Bella",
    petType: "Golden Retriever",
    rating: 5,
  },
  {
    id: 3,
    content: "We've tried several boarding facilities, but PiPi's home environment is unmatched. Oliver was so comfortable and relaxed — he didn't show any signs of separation anxiety when we returned.",
    author: "Jennifer Wong",
    pet: "Oliver",
    petType: "British Shorthair Cat",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Happy Pets Served", icon: PawPrint },
  { value: "4.9", label: "Average Rating", icon: Star, suffix: "/5" },
  { value: "3+", label: "Years of Experience", icon: Heart },
  { value: "100%", label: "Pet Parent Satisfaction", icon: Shield },
];

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Heart, label: "First Aid Certified" },
  { icon: Award, label: "Pet-Safe Certified" },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand500)] font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-6">
            What Our Pet Parents Say
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto font-body">
            Join hundreds of discerning pet owners who trust PiPi Home Boarding
            with their beloved companions.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[var(--surface)] rounded-xl p-6 text-center border border-[var(--border)] hover:shadow-lg hover:shadow-[var(--brand500)]/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand500)]/10 text-[var(--brand500)] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-heading text-3xl md:text-4xl text-[var(--text)] mb-2">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-lg text-[var(--muted)]">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)] font-body">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] hover:border-[var(--brand500)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand500)]/10 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--brand500)] text-[var(--brand500)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--text)] font-body leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand500)] to-[var(--brand700)] flex items-center justify-center text-white font-heading text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-[var(--text)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[var(--muted)] font-body">
                    Parent of {testimonial.petType}{" "}
                    <span className="text-[var(--brand500)]">
                      {testimonial.pet}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-[var(--surface)] rounded-2xl p-8 md:p-12 border border-[var(--border)]">
          <p className="text-center text-sm tracking-[0.15em] uppercase text-[var(--muted)] mb-8 font-body">
            Your Pet's Safety & Trust
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 text-[var(--text)]"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--brand500)]/10 text-[var(--brand500)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-body font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}