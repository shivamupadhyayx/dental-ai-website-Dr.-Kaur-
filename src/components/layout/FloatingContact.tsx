"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        >
          {/* WhatsApp Button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/919798397757" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] transition-shadow"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.a>

          {/* Call Button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:+919798397757" // Replace with actual number
            className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-ambient hover:shadow-lg transition-shadow"
            aria-label="Call us"
          >
            <PhoneCall className="w-6 h-6" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
