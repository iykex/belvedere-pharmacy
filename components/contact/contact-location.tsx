import WidthConstraint from "../shared/width-constraint";
import { ContactForm } from "./contact-form";
import ContactsColumn from "./contacts-column";

export default function ContactLocation() {
  return (
    <section>
      <WidthConstraint>
        <div className="grid sm:grid-cols-2 p-5 ">
          <ContactsColumn />
          <ContactForm />
        </div>
      </WidthConstraint>
    </section>
  );
}
