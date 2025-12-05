import WidthConstraint from "../shared/width-constraint";

export default function Hero() {
  return (
    <section className="overflow-hidden mt-[8%]">
      <WidthConstraint>
        <div className="text-center">
          <h1 className="text-title font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-card-title text-muted-foreground leading-relaxed">
            We're here to help. Reach out to our team with any questions or
            concerns.
          </p>
        </div>
      </WidthConstraint>
    </section>
  );
}
