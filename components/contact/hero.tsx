import { Mail, MessageCircle } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-linear-to-br from-[#002f4b] via-[#003d5c] to-[#004a6d]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,153,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,191,255,0.08),transparent_50%)]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" />

      <WidthConstraint className="relative z-10 mb-6  pt-34 sm:pt-[10%}">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge className="inline-flex items-center gap-2 text-primary text-sm font-semibold bg-primary/15 py-2.5 px-5 border-primary/30 backdrop-blur-sm">
            <MessageCircle className="size-4" />
            Get in Touch
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto">
            We're here to help. Reach out to our team with any questions or
            concerns about your healthcare needs.
          </p>

          {/* Quick Contact */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="size-5 text-primary" />
              <span>info@belvederepharmacy.com</span>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
