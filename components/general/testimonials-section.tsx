"use client";
import { Quote, Star, ArrowRight } from "lucide-react";
import { useTestimonial } from "@/hooks/use-testimonial";
import { TESTIMONIALS_DEMO } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Testimonials() {
  const { currentIndex, goToTestimonial } = useTestimonial();
  const currentTestimonial = TESTIMONIALS_DEMO[currentIndex];

  return (
    <section className="py-20 bg-[#002f4b] relative overflow-hidden observer-target">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,153,0,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,191,255,0.06),transparent_50%)]" />

      <WidthConstraint className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Header & Stats */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-4 mb-4">
                Trusted by <span className="text-primary">Thousands</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Hear what our patients have to say about their experience with
                Belvedere Pharmacy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-white/60 text-sm">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-white/60 text-sm">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99%</p>
                <p className="text-white/60 text-sm">Satisfaction</p>
              </div>
            </div>

            <Button
              asChild
              className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Leave a Review
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              {/* Quote Icon */}
              <Quote className="size-10 text-primary" />

              {/* Testimonial Content */}
              <p className="text-white/90 text-lg leading-relaxed">
                "{currentTestimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full border-2 border-primary/30 bg-white"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS_DEMO.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
