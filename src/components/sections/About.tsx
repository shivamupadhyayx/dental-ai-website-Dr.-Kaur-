"use client";
import { FadeIn } from "../ui/FadeIn";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[600px] w-full">
            <FadeIn direction="right" className="h-full">
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-ambient relative">
                {/* Premium unspalsh portrait for dentist */}
                <img 
                  src="/images/dr-kaur-new.jpeg" 
                  alt="Dr. Kaur - Best Dentist in Ranchi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 md:-right-12 bg-primary p-8 rounded-2xl shadow-ambient max-w-[280px]">
                <p className="font-display text-white text-xl font-bold mb-2">Gold Medalist</p>
                <p className="text-on-primary/80 text-sm">Best Dentist Award 2022</p>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <span className="inline-block py-1 px-3 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant text-sm font-semibold mb-6">
                Meet The Expert
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
                Dr. Kaur
              </h2>
              <p className="text-primary font-semibold text-lg mb-8">
                MDS - Conservative Dentistry & Endodontics
              </p>
              
              <div className="space-y-6 text-on-surface-variant text-lg font-sans">
                <p>
                  Dr. Kaur is one of the best dentists in Ranchi, renowned for her meticulous approach and gentle touch. With over 15 years of clinical experience, she specializes in restorative dentistry and aesthetic smile design.
                </p>
                <p>
                  She established True Pearls Dental Care with a vision to provide Ranchi residents with the same level of dental quality found in major metropolitan cities, emphasizing patient education and ethical practice above all.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                  <h4 className="font-display font-bold text-on-surface mb-2">Pain-Free Dentistry</h4>
                  <p className="text-sm text-on-surface-variant">Computerized anesthesia ensuring absolute comfort.</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                  <h4 className="font-display font-bold text-on-surface mb-2">Advanced Tech</h4>
                  <p className="text-sm text-on-surface-variant">Intra-oral scanners and Digital X-rays.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
