import Image from "next/image";
import WidthConstraint from "../shared/width-constraint";
import TestimonialsSlide from "./testimonials-slide";
import SectionHeader from "./section-header";

export default function Testimonials() {
  return (
    <section className="observer-target">
      <WidthConstraint>
        <SectionHeader heading="Testimonials" />
        <div className="mt-10 grid min-[1070px]:grid-cols-2 place-items-center xl:p-0 rounded-2xl gap-2 bg-foreground/80 pb-5 min-[1070px]:pb-0 ">
          <Image
            src="/testimonial-image.svg"
            alt="testimonial"
            width={648}
            height={466}
            className="rounded-2xl min-[1070px]:rounded-r-none max-[1070px]:md"
          />
          <TestimonialsSlide />
        </div>
      </WidthConstraint>
    </section>
  );
}
