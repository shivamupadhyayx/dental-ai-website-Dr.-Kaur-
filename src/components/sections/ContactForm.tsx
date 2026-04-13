"use client";
import { useForm } from "react-hook-form";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
};

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call for the demonstration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <FadeIn direction="right">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
                Consultation
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-6">
                Book Your Appointment Today
              </h2>
              <p className="text-lg text-on-surface-variant font-sans mb-10">
                Get expert consultation from Dr. Kaur. Let's start your journey towards a perfect smile.
              </p>

              {/* Form Container */}
              <div className="bg-surface-container-low p-8 rounded-2xl">
                {isSuccess ? (
                  <div className="bg-[#f0fdf4] text-[#166534] p-6 rounded-xl border border-[#bbf7d0]">
                    <h3 className="font-display font-bold text-xl mb-2">Request Received!</h3>
                    <p>Thank you. Our front desk will call you shortly to confirm your appointment timing.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <input 
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Full Name"
                        className="w-full bg-surface-container-highest border-b-2 border-outline-variant/40 px-4 py-4 focus:outline-none focus:border-primary focus:bg-surface-container-highest transition-colors font-sans text-on-surface rounded-t-lg"
                      />
                      {errors.name && <span className="text-sm text-tertiary mt-1 block">{errors.name.message}</span>}
                    </div>
                    
                    <div>
                      <input 
                        {...register("phone", { required: "Phone number is required" })}
                        placeholder="Phone Number"
                        type="tel"
                        className="w-full bg-surface-container-highest border-b-2 border-outline-variant/40 px-4 py-4 focus:outline-none focus:border-primary focus:bg-surface-container-highest transition-colors font-sans text-on-surface rounded-t-lg"
                      />
                      {errors.phone && <span className="text-sm text-tertiary mt-1 block">{errors.phone.message}</span>}
                    </div>

                    <div>
                      <select 
                        {...register("service")}
                        className="w-full bg-surface-container-highest border-b-2 border-outline-variant/40 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-sans text-on-surface rounded-t-lg"
                      >
                        <option value="">Select Treatment (Optional)</option>
                        <option value="root_canal">Root Canal</option>
                        <option value="implants">Dental Implants</option>
                        <option value="whitening">Laser Whitening</option>
                        <option value="braces">Braces / Invisalign</option>
                        <option value="general">General Checkup</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending Request..." : "Request Appointment"}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          <div className="h-full min-h-[400px]">
            <FadeIn direction="left" className="h-full">
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-ambient">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117282.84478330058!2d85.25368307436034!3d23.343468962635965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1705645511394!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Kaur's True Pearls Dental Clinic Location"
                ></iframe>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
