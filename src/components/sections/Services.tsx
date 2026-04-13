"use client";
import { FadeIn } from "../ui/FadeIn";

const services = [
  {
    num: "01",
    title: "Painless Root Canal",
    desc: "Save your natural teeth with our advanced, pain-free rotary endodontics technology in Ranchi.",
  },
  {
    num: "02",
    title: "Dental Implants",
    desc: "Permanent tooth replacement solutions that look and feel completely natural.",
  },
  {
    num: "03",
    title: "Laser Whitening",
    desc: "Get a brighter, whiter smile in just 45 minutes with our clinical-grade whitening.",
  },
  {
    num: "04",
    title: "Invisalign & Braces",
    desc: "Straighten your teeth discreetly with Ranchi's most trusted orthodontic experts.",
  },
  {
    num: "05",
    title: "Digital Smile Makeover",
    desc: "Transform your appearance using our 3D smile design software for personalized results.",
  },
  {
    num: "06",
    title: "Wisdom Extraction",
    desc: "Fast, atraumatic tooth removals with minimal recovery time.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 md:w-2/3">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-6 mt-4">
              Clinical Excellence
            </h2>
            <p className="text-lg text-on-surface-variant font-sans">
              Our Ranchi clinic offers a comprehensive range of dental solutions tailored to your unique oral health needs, delivered with precision and care.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className="bg-surface-container-highest p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group">
                {/* Large Background Numeral for Asymmetric Editorial Look */}
                <div className="absolute -top-4 -right-2 text-[120px] font-display font-bold text-primary/5 leading-none transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                  {service.num}
                </div>
                
                <h3 className="font-display text-2xl font-bold text-on-surface mb-4 z-10">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant z-10 flex-grow font-sans leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-8 z-10">
                  <a href="#contact" className="text-primary font-semibold hover:text-primary-container inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Book Consult
                    <span className="text-xl leading-none">→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
