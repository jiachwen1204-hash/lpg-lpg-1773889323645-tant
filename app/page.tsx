import { Phone, Mail, MapPin, Clock, Heart, Shield, Home, Utensils, Play, Star, CheckCircle2, ChevronRight, Menu, X, PawPrint } from 'lucide-react';

export default function PiPiHomeBoarding() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#1C1917]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        :root {
          --font-heading: 'Playfair Display', Georgia, serif;
          --font-body: 'DM Sans', system-ui, sans-serif;
        }
        
        .font-heading {
          font-family: var(--font-heading);
        }
        
        .font-body {
          font-family: var(--font-body);
        }
        
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
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F6]/95 backdrop-blur-sm border-b border-[#E8E4E0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="font-heading text-2xl font-semibold text-[#BE123C] tracking-wide">
              PiPi Home Boarding
            </a>
            
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="font-body text-sm text-[#78716C] hover:text-[#BE123C] transition-colors duration-300">About</a>
              <a href="#services" className="font-body text-sm text-[#78716C] hover:text-[#BE123C] transition-colors duration-300">Services</a>
              <a href="#why-us" className="font-body text-sm text-[#78716C] hover:text-[#BE123C] transition-colors duration-300">Why Us</a>
              <a href="#testimonials" className="font-body text-sm text-[#78716C] hover:text-[#BE123C] transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="font-body text-sm text-[#78716C] hover:text-[#BE123C] transition-colors duration-300">Contact</a>
            </div>
            
            <div className="hidden md:block">
              <a href="#book" className="inline-flex items-center gap-2 bg-[#BE123C] text-white px-6 py-3 rounded-xl font-body font-medium text-sm hover:bg-[#9f1239] transition-all duration-300 shadow-lg shadow-[#BE123C]/20">
                Book Your Stay
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            
            <button className="md:hidden text-[#1C1917]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F6] via-[#FB7185]/5 to-[#FAF8F6]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-[#E8E4E0]">
                  <PawPrint className="w-4 h-4 text-[#FB7185]" />
                  <span className="font-body text-sm text-[#78716C]">Premium Pet Boarding</span>
                </span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-[#1C1917] animate-fade-up opacity-0 delay-200">
                Where Your Pet's{' '}
                <span className="text-[#BE123C]">Comfort</span>{' '}
                Meets{' '}
                <span className="text-[#BE123C]">Elegant Care</span>
              </h1>
              
              <p className="font-body text-lg text-[#78716C] leading-relaxed max-w-xl animate-fade-up opacity-0 delay-300">
                A home away from home for your beloved companions. Experience the warmth of a loving home environment with personalized attention that treats every pet like family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-400">
                <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#BE123C] text-white px-8 py-4 rounded-xl font-body font-medium text-base hover:bg-[#9f1239] transition-all duration-300 shadow-xl shadow-[#BE123C]/25">
                  Book Your Stay
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#about" className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1917] px-8 py-4 rounded-xl font-body font-medium text-base border border-[#E8E4E0] hover:border-[#BE123C] hover:text-[#BE123C] transition-all duration-300">
                  Learn More
                </a>
              </div>
              
              <div className="flex items-center gap-8 pt-4 animate-fade-up opacity-0 delay-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FB7185] to-[#BE123C] border-2 border-white flex items-center justify-center">
                      <PawPrint className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FB7185] text-[#FB7185]" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-[#78716C]">Trusted by 500+ pet owners</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in opacity-0 delay-300">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-[#FB7185]/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-[#BE123C]/20 rounded-full blur-3xl"></div>
                
                <div className="relative bg-gradient-to-br from-[#FB7185]/10 to-[#BE123C]/10 rounded-3xl p-8 backdrop-blur-sm border border-[#E8E4E0]">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#FB7185]/20 via-[#BE123C]/10 to-[#FB7185]/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23BE123C\" fill-opacity=\"0.08\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                      <div className="relative text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#FB7185] to-[#BE123C] rounded-full flex items-center justify-center shadow-lg animate-float">
                          <Heart className="w-12 h-12 text-white" />
                        </div>
                        <p className="font-heading text-xl text-[#1C1917]">Loving Care</p>
                        <p className="font-body text-sm text-[#78716C]">For Every Pet</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E8E4E0]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#FB7185]/10 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-[#FB7185]" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-[#1C1917]">100% Safe</p>
                        <p className="font-body text-xs text-[#78716C]">Secure Environment</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E8E4E0]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#BE123C]/10 rounded-xl flex items-center justify-center">
                        <Home className="w-6 h-6 text-[#BE123C]" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-[#1C1917]">Home Away</p>
                        <p className="font-body text-xs text-[#78716C]">From Home</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#FB7185]/20 to-[#BE123C]/10 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23BE123C\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#FB7185] to-[#BE123C] rounded-full flex items-center justify-center shadow-2xl">
                      <Home className="w-16 h-16 text-white" />
                    </div>
                    <div>
                      <p className="font-heading text-3xl font-semibold text-[#1C1917]">A Home Away</p>
                      <p className="font-heading text-3xl font-semibold text-[#BE123C]">From Home</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-[#BE123C] text-white rounded-2xl p-6 shadow-2xl">
                <p className="font-heading text-4xl font-bold">5+</p>
                <p className="font-body text-sm opacity-90">Years of Experience</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="font-body text-sm text-[#FB7185] font-medium tracking-wider uppercase">About Us</span>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1C1917] mt-3 leading-tight">
                  Loving Home-Based{' '}
                  <span className="text-[#BE123C]">Pet Boarding</span>
                </h2>
              </div>
              
              <p className="font-body text-lg text-[#78716C] leading-relaxed">
                PiPi Home Boarding is a loving home-based pet boarding service that provides a safe, comfortable, and stress-free stay for your furry family members while you're away.
              </p>
              
              <p className="font-body text-[#78716C] leading-relaxed">
                We offer a cozy home environment where pets receive personal attention, proper care, and plenty of affection — just like they would at home. Unlike crowded pet hotels, our home boarding reduces anxiety and ensures pets can relax, play, and rest in a clean and secure space.
              </p>
              
              <div className="space-y-4">
                {[
                  'Follows each pet\'s daily routine closely',
                  'Feeding schedules maintained precisely',
                  'Plenty of playtime and rest periods',
                  'Clean and secure living space',
                  'Treated like family, not just a guest'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FB7185] mt-0.5 flex-shrink-0" />
                    <span className="font-body text-[#78716C]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-[#FAF8F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-body text-sm text-[#FB7185] font-medium tracking-wider uppercase">Our Services</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1C1917] mt-3">
              Premium Care For{' '}
              <span className="text-[#BE123C]">Every Pet</span>
            </h2>
            <p className="font-body text-lg text-[#78716C] mt-4">
              We provide comprehensive services designed to meet your pet's every need, ensuring they feel happy and cared for throughout their stay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: 'Home Environment',
                description: 'Cozy, clean, and secure space that feels like home, reducing pet anxiety and stress.'
              },
              {
                icon: Heart,
                title: 'Personal Attention',
                description: 'One-on-one care and affection for every pet, treating them as our own family.'
              },
              {
                icon: Utensils,
                title: 'Feeding Schedule',
                description: 'Maintained according to your pet\'s routine, with premium food options available.'
              },
              {
                icon: Play,
                title: 'Playtime & Rest',
                description: 'Balanced activities with plenty of rest, ensuring your pet stays happy and healthy.'
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Fenced yard and supervised play areas for worry-free relaxation and fun.'
              },
              {
                icon: Clock,
                title: 'Flexible Hours',
                description: 'Extended hours and weekend availability to accommodate your schedule.'
              },
              {
                icon: Star,
                title: 'Premium Comfort',
                description: 'Soft bedding, climate control, and quiet spaces for restful naps.'
              },
              {
                icon: PawPrint,
                title: 'All Breeds Welcome',
                description: 'Experience with dogs and cats of all sizes, ages, and temperaments.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-[#E8E4E0] hover:border-[#FB7185] hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FB7185]/10 to-[#BE123C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-[#BE123C]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1C1917] mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-[#78716C] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="font-body text-sm text-[#FB7185] font-medium tracking-wider uppercase">Why Choose Us</span>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1C1917] mt-3 leading-tight">
                  The PiPi{' '}
                  <span className="text-[#BE123C]">Difference</span>
                </h2>
              </div>
              
              <p className="font-body text-lg text-[#78716C] leading-relaxed">
                At PiPi Home Boarding, we treat every pet like family and give owners peace of mind knowing their companions are in safe, loving hands.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Home-Like Atmosphere',
                    description: 'Unlike crowded pet hotels, our home environment reduces anxiety and helps pets relax naturally.'
                  },
                  {
                    title: 'Personalized Care Plans',
                    description: 'We follow each pet\'s routine closely, including feeding schedules, playtime, and rest periods.'
                  },
                  {
                    title: 'Limited Capacity',
                    description: 'We maintain a small number of guests at a time to ensure maximum attention for every pet.'
                  },
                  {
                    title: 'Experienced Pet Lovers',
                    description: 'Our team consists of dedicated pet enthusiasts who understand and cater to each animal\'s needs.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FB7185]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#FB7185]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-[#1C1917] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-[#78716C]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square bg-gradient-to-br from-[#FB7185]/10 to-[#BE123C]/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"52\" height=\"26\" viewBox=\"0 0 52 26\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23BE123C\" fill-opacity=\"0.04\"%3E%3Cpath d=\"M0 0h52v1H0zM0 13h52v1H0zM0 25h52v1H0z\"/%3E%3C/g%3E%3C/svg%3E')]"></div>
                
                <div className="relative h-full flex flex-col justify-center items-center text-center space-y-8">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E8E4E0]">
                      <p className="font-heading text-4xl font-bold text-[#BE123C]">500+</p>
                      <p className="font-body text-sm text-[#78716C] mt-1">Happy Pets</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E8E4E0]">
                      <p className="font-heading text-4xl font-bold text-[#BE123C]">5+</p>
                      <p className="font-body text-sm text-[#78716C] mt-1">Years Experience</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E8E4E0]">
                      <p className="font-heading text-4xl font-bold text-[#BE123C]">100%</p>
                      <p className="font-body text-sm text-[#78716C] mt-1">Satisfaction</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E8E4E0]">
                      <p className="font-heading text-4xl font-bold text-[#BE123C]">24/7</p>
                      <p className="font-body text-sm text-[#78716C] mt-1">Care Available</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#FB7185] to-[#BE123C] rounded-2xl p-6 text-white w-full">
                    <p className="font-heading text-2xl font-semibold">"Treating Every Pet Like Family"</p>
                    <p className="font-body text-sm opacity-90 mt-2">Our promise to you and your beloved companions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-[#FB7185]/5 to-[#BE123C]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-body text-sm text-[#FB7185] font-medium tracking-wider uppercase">Testimonials</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1C1917] mt-3">
              What Pet Owners{' '}
              <span className="text-[#BE123C]">Say</span>
            </h2>
            <p className="font-body text-lg text-[#78716C] mt-4">
              Hear from pet owners who have experienced the PiPi difference firsthand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Dog Owner',
                content: 'I was nervous leaving my golden retriever for the first time, but PiPi made me feel completely at ease. The home environment and personal attention Charlie received was exceptional. He came back happy and well-cared for!',
                rating: 5
              },
              {
                name: 'Michael Tan',
                role: 'Cat Owner',
                content: 'Finding a place that understands cats is rare. PiPi Home Boarding exceeded all expectations. My Persian cat was comfortable, well-fed, and even seemed to enjoy her stay. The peace of mind is priceless.',
                rating: 5
              },
              {
                name: 'Emily Wong',
                role: 'Multi-Pet Owner',
                content: 'Having both a dog and cat, I needed a place that could accommodate both. PiPi handled everything flawlessly. The daily updates and photos were a wonderful touch. Highly recommend for multi-pet households!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#E8E4E0] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FB7185] text-[#FB7185]" />
                  ))}
                </div>
                <p className="font-body text-[#78716C] leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FB7185] to-[#BE123C] rounded-full flex items-center justify-center">
                    <span className="font-heading text-lg font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-medium text-[#1C1917]">{testimonial.name}</p>
                    <p className="font-body text-sm text-[#78716C]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-24 lg:py-32 bg-gradient-to-br from-[#BE123C] to-[#9f1239] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <PawPrint className="w-4 h-4 text-white/80" />
            <span className="font-body text-sm text-white/80">Reserve Your Pet's Stay</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Give Your Pet The{' '}
            <span className="text-[#FB7185]">Care They Deserve</span>
          </h2>
          
          <p className="font-body text-lg text-white/80 mt-6 max-w-2xl mx-auto">
            Book your pet's stay at PiPi Home Boarding today. Experience the warmth of a loving home environment with personalized attention that treats every pet like family.
          </p>
          
          <div className="mt-10">
            <a 
              href="mailto:jiachwen99@gmail.com?subject=Booking%20Inquiry%20-%20PiPi%20Home%20Boarding"
              className="inline-flex items-center gap-3 bg-white text-[#BE123C] px-10 py-5 rounded-xl font-body font-semibold text-lg hover:bg-[#FAF8F6] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Book Your Stay
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
          
          <p className="font-body text-sm text-white/60 mt-6">
            Or contact us directly via email or phone to discuss your pet's needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="font-body text-sm text-[#FB7185] font-medium tracking-wider uppercase">Contact Us</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1C1917] mt-3">
                Get In{' '}
                <span className="text-[#BE123C]">Touch</span>
              </h2>
              <p className="font-body text-lg text-[#78716C] mt-4 mb-8">
                Have questions about our services? We'd love to hear from you. Reach out and let's discuss how we can make your pet's stay wonderful.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">