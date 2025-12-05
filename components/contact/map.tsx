import WidthConstraint from "../shared/width-constraint";

export default function Map() {
  return (
    <section>
      <WidthConstraint className="space-y-5">
        <div className="text-center">
          <h2 className="text-section-header font-bold tracking-tight">
            Find Us
          </h2>
          <p className="text-card-title text-muted-foreground">
            Visit our pharmacy at 11 PICARDY STREET, BELVEDERE, KENT DA17 5QQ
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-video max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9548834847816!2d0.1399!3d51.4899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzIzLjYiTiAwwrAwOCczNS42IkU!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pharmacy Location Map"
          ></iframe>
        </div>
      </WidthConstraint>
    </section>
  );
}
