import WidthConstraint from "../shared/width-constraint";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <WidthConstraint>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                A Story of{" "}
                <span className="text-primary">Community Care</span>
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/50" />
            </div>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Belvedere Pharmacy was founded in 2020 with a simple mission: to
                provide accessible, personalized healthcare to our local
                community. What started as a small family-owned pharmacy has
                grown into a trusted healthcare provider serving thousands of
                patients.
              </p>
              <p>
                Over the years, we've expanded our services beyond traditional
                pharmacy care to include a wide range of health services, from
                vaccinations and health screenings to medication management and
                chronic disease support.
              </p>
              <p>
                Despite our growth, we've never lost sight of our core values:
                compassion, accessibility, and excellence in care. Every member
                of our team is committed to treating each patient with respect
                and dignity.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-primary">5+</p>
                <p className="text-sm text-gray-500 font-medium">Years Serving</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-primary">5000+</p>
                <p className="text-sm text-gray-500 font-medium">Patients Helped</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-primary">NHS</p>
                <p className="text-sm text-gray-500 font-medium">Accredited</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/booking.jpg"
                  alt="Belvedere Pharmacy Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border-l-4 border-primary">
                <p className="font-bold text-gray-900 text-lg">Community First</p>
                <p className="text-sm text-gray-500">Serving neighbors since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
