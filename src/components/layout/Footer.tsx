export function Footer() {
  return (
    <footer className="bg-surface-container-low pt-20 pb-10 mt-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex flex-col mb-6">
              <span className="font-display font-bold text-2xl text-primary tracking-tight">
                True Pearls
              </span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Dental Care
              </span>
            </a>
            <p className="text-on-surface-variant max-w-sm mb-6">
              Providing advanced, patient-centric dental care in the heart of Ranchi. Your comfort is our priority.
            </p>
            <div className="flex gap-4">
              <span className="text-sm font-medium text-on-surface border border-outline-variant/20 px-3 py-1 rounded-full">
                Google Rating: 5.0 ⭐ (500+ Reviews)
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-on-surface mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#services" className="text-on-surface-variant hover:text-primary transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors">About Dr. Kaur</a>
              </li>
              <li>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Patient Portal</a>
              </li>
              <li>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Ranchi Clinic Directions</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-on-surface mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-on-surface-variant">
                <span className="block font-medium text-on-surface mb-1">Clinic Address</span>
                H-123, Harmu Housing Colony, Ranchi, Jharkhand 834002
              </li>
              <li className="text-on-surface-variant">
                <span className="block font-medium text-on-surface mb-1">Clinic Hours</span>
                Mon - Sat: 10:00 AM - 08:00 PM <br />
                Sunday: By Appointment Only
              </li>
              <li>
                <a href="mailto:contact@truepearls.com" className="text-primary hover:text-primary-container font-medium">
                  contact@truepearls.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <p>© 2024 True Pearls Dental Care. All rights reserved. Dr. Kaur, Ranchi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
