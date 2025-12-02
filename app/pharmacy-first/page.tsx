import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

// Section Header Component
const SectionHeader = ({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string | ReactNode;
  description: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary via-primary/90 to-chart-2 text-primary-foreground px-5 py-2.5 rounded-full mb-6 shadow-lg relative overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <Sparkles className="w-4 h-4" />
      <span className="text-sm font-bold relative z-10">{badge}</span>
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
      {title}
    </h2>
    <div className="flex w-24 mx-auto mb-6">
      <hr className="w-1/2 bg-chart-3 h-1 border-0 rounded-full" />
      <hr className="w-1/2 bg-chart-2 h-1 border-0 rounded-full" />
    </div>
    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

export default function PharmacyFirstPage() {
  const conditions = [
    {
      title: "Ear Pains",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Treatment is suitable for children aged between 1 and 17 years. Our pharmacists are specially trained to diagnose and treat ear infections with professional care.",
      serviceId: "ear-pain",
      color: "from-primary/20 to-primary/5",
      icon: "🦻",
    },
    {
      title: "Infected Insect Bites",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Comprehensive care for complications from insect bites. Our skilled team ensures swift and effective recovery with professional support.",
      serviceId: "skin-infection",
      color: "from-chart-3/20 to-chart-3/5",
      icon: "🐛",
    },
    {
      title: "Bacterial Skin Infection",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Expert assessment and treatment for various skin infections. We help diagnose your condition and recommend proper treatment for prompt recovery.",
      serviceId: "skin-infection",
      color: "from-chart-2/20 to-chart-2/5",
      icon: "🩹",
    },
    {
      title: "Shingles",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Professional support for painful rashes and blisters. We offer assessment, treatment, and compassionate care to guide your recovery journey.",
      serviceId: "shingles",
      color: "from-destructive/20 to-destructive/5",
      icon: "⚡",
    },
    {
      title: "Sinus Infection",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Relief for stuffy nose, headache, or facial pain. Our services include assessment, treatment, and guidance for effective sinus management.",
      serviceId: "sinus-infection",
      color: "from-primary/20 to-primary/5",
      icon: "🌬️",
    },
    {
      title: "Sore Throat",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Prompt and effective care for sore throats. Quick assessment and treatment to help you feel better and restore your comfort.",
      serviceId: "sore-throat",
      color: "from-chart-3/20 to-chart-3/5",
      icon: "🗣️",
    },
    {
      title: "Urinary Tract Infection",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Expert care for women experiencing UTI symptoms. We provide professional advice, assessment, and effective treatment with personalized attention.",
      serviceId: "uti",
      color: "from-chart-2/20 to-chart-2/5",
      icon: "💧",
      badge: "Women",
    },
  ];

  const benefits = [
    {
      title: "Convenience",
      description:
        "Skip the GP appointment and get treated for common ailments at your local pharmacy.",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Accessibility",
      description:
        "Enjoy extended hours and easier access compared to traditional GP surgeries.",
      icon: Users,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      title: "Expertise",
      description:
        "Our qualified pharmacists provide professional advice and treatment for numerous conditions.",
      icon: Shield,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      title: "Reduced NHS Pressure",
      description:
        "By using Pharmacy First, GP workloads decrease, enhancing patient care access.",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-accent/40 via-background to-accent/20 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-linear(to_right,#dde2e612_1px,transparent_1px),linear-linear(to_bottom,#dde2e612_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-chart-2/10 blur-[100px]"></div>

        <div className="container grid gap-12 lg:grid-cols-2 items-center relative z-10">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border-2 border-primary/30 bg-card px-4 py-2 text-sm font-semibold text-primary shadow-lg">
              <div className="w-2 h-2 bg-chart-3 rounded-full mr-2 animate-pulse"></div>
              NHS Pharmacy First Service
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Free NHS Consultations at{" "}
              <span className="text-primary">Belvedere Pharmacy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Skip the GP wait and get expert healthcare advice for common
              conditions. Our qualified pharmacists are here to help you feel
              better, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/appointment" className="flex items-center">
                  Book Free Appointment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Link href="#conditions">View Conditions</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">NHS Funded</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-chart-3">7+</p>
                <p className="text-sm text-muted-foreground">
                  Conditions Treated
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-chart-2">Fast</p>
                <p className="text-sm text-muted-foreground">
                  Same Day Service
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-chart-2/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border-2 border-border rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="NHS Pharmacy First Service"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Programme */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <SectionHeader
            badge="About the Programme"
            title={
              <>
                What is <span className="text-primary">Pharmacy First?</span>
              </>
            }
            description="The NHS Pharmacy First programme allows patients to receive healthcare advice and treatment for common conditions directly from their local pharmacy, reducing GP waiting times."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border-2 border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1"
                >
                  <div
                    className={`${benefit.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-7 w-7 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Info Card */}
          <div className="bg-linear-to-br from-accent/50 to-accent/30 border-2 border-primary/20 rounded-3xl p-8 md:p-10 text-center">
            <p className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold text-foreground">
                Belvedere Pharmacy
              </span>
              , we're committed to offering this valuable service to help you
              access the care you need quickly and efficiently—without the wait.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section
        id="conditions"
        className="py-20 md:py-28 bg-linear-to-b from-background via-accent/10 to-background relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <SectionHeader
            badge="Conditions We Treat"
            title={
              <>
                Get Help for{" "}
                <span className="text-primary">Common Health Issues</span>
              </>
            }
            description="Our Pharmacy First service can help you with a range of common conditions without needing to see a GP. All consultations are FREE on the NHS."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-hidden border-2 border-border transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
              >
                {condition.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-chart-2 to-chart-2/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {condition.badge}
                  </div>
                )}

                <div className="absolute top-4 left-4 z-10 text-4xl">
                  {condition.icon}
                </div>

                <div
                  className={`relative h-48 bg-linear-to-br ${condition.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/30 to-transparent"></div>
                  <h3 className="relative z-10 text-2xl font-bold text-foreground px-6 text-center">
                    {condition.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-24">
                    {condition.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold group/btn"
                  >
                    <Link
                      href={`/appointment?service=${condition.serviceId}`}
                      className="flex items-center justify-center"
                    >
                      Book Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-linear-to-br from-primary via-primary/95 to-chart-2 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-linear(to_right,#ffffff12_1px,transparent_1px),linear-linear(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Use Our Free NHS Service?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Book an appointment today and get the professional healthcare
                advice you need without waiting for a GP appointment.
              </p>
              <ul className="space-y-4">
                {[
                  "Quick and convenient appointments",
                  "Professional healthcare advice",
                  "Treatment for common conditions",
                  "NHS-funded service (completely free)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 h-6 w-6 text-chart-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Book Your Free Consultation
              </h3>
              <p className="mb-6 text-primary-foreground/80 text-base leading-relaxed">
                Choose a convenient time for your Pharmacy First consultation.
                Our expert pharmacists are ready to help you feel better.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-background text-primary hover:bg-background/90 rounded-full font-semibold shadow-lg group"
                >
                  <Link
                    href="/appointment"
                    className="flex items-center justify-center"
                  >
                    Book Free Appointment
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold"
                >
                  <Link href="/contact">Contact Us for Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
