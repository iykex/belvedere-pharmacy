import Image from "next/image";
import WidthConstraint from "../shared/width-constraint";
import TestimonialsSlide from "./testimonials-slide";

export default function Testimonials() {
  return (
    <WidthConstraint className="grid min-[1070px]:grid-cols-2 place-items-center xl:p-0 overflow-hidden my-20 rounded-2xl gap-2 bg-foreground/80">
      <Image
        src="/testimonial-image.svg"
        alt="testimonial"
        width={648}
        height={466}
        className="rounded-2xl rounded-r-none max-[1070px]:md"
      />
      <TestimonialsSlide />
    </WidthConstraint>
  );
}
