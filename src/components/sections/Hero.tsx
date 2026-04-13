"use client";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-surface">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-3/4 h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="z-10">
            <FadeIn direction="up">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
                Ranchi's Premier Dental Clinic
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8">
                Precision <br />
                <span className="text-primary italic font-light">Peace &</span> <br />
                Perfection
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed font-sans">
                Experience world-class dental expertise with Dr. Kaur. We combine high-end technology with compassionate care to give you the smile you deserve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Book Your Visit
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  Explore Treatments
                </Button>
              </div>

              <div className="mt-12 flex gap-8 items-center border-t border-outline-variant/20 pt-8">
                <div>
                  <p className="font-display text-3xl font-bold text-primary mb-1">15+</p>
                  <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Years Exp.</p>
                </div>
                <div className="w-px h-12 bg-outline-variant/30" />
                <div>
                  <p className="font-display text-3xl font-bold text-primary mb-1">12k+</p>
                  <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Happy Smiles</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative z-10 w-full h-[500px] lg:h-[700px]">
            <FadeIn delay={0.2} direction="left" className="h-full">
              {/* Using a premium unsplash image of a luxury clinic chair as a placeholder */}
              <div 
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-ambient relative"
              >
                <img 
                  src="/images/clinic-new.jpeg" 
                  alt="Modern Dental Clinic Interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              
              {/* Floating trust card */}
              <div className="absolute -bottom-8 -left-8 bg-surface-container-highest p-6 rounded-2xl shadow-ambient border border-outline-variant/10 max-w-[250px] hidden md:block">
                <div className="flex gap-1 text-[#fcd400] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="font-semibold text-on-surface text-sm">"Truly the best dentist in Ranchi. Painless and professional."</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
