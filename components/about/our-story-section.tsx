import WidthConstraint from "../shared/width-constraint";

export default function OurStorySection() {
  return (
    <section>
      <WidthConstraint>
        <div className="grid md:grid-cols-2 gap-16 items-center my-5">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl font-bold tracking-tight">Our Journey</h2>
              <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-primary to-secondary" />
            </div>

            <div className="space-y-4 text-[20px] text-muted-foreground leading-relaxed max-w-lg text-justify">
              <p>
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
          </div>

          <div className="relative group">
            <div className="absolute  max-w-2xl inset-0 bg-primary rounded-3xl rotate-5 opacity-20 group-hover:rotate-10 transition-transform duration-500"></div>
            <div className="relative rounded-3xl border-4 border-white">
              <img
                src="https://placehold.co/800x600/002F4B/FFFFFF?text=Our+Pharmacy+Team"
                alt="Belvedere Pharmacy Team"
                className="w-full max-w-2xl object-cover transform group-hover:hover:scale-90 transition-transform duration-700 rounded-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-primary hover:border-background  hover:bg-primary group">
                <p className="font-bold text-foreground group-hover:text-background">
                  Community First
                </p>
                <p className="text-xs text-muted-foreground group-hover:text-white/70">
                  Serving neighbors for decades
                </p>
              </div>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
