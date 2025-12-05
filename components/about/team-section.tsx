import { TEAM_MEMBERS } from "@/lib/constants";
import SectionHeader from "../general/section-divider-head";
import WidthConstraint from "../shared/width-constraint";
import { Calendar } from "lucide-react";

export default function TeamSection() {
  return (
    <section>
      <WidthConstraint>
        <div className="text-center mx-auto space-y-2">
          <SectionHeader heading="Our Healthcare Family" />
          <h2 className="text-section-header font-bold tracking-tight text-foreground">
            Meet Our <span className="text-primary">Healthcare</span> Family
          </h2>
          <p className="text-base text-muted-foreground">
            Dedicated professionals committed to your wellbeing
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-5">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="h-full w-full bg-linear-to-br from-primary/10 to-secondary/10" />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-1 text-card-title font-bold">
                  {member.name}
                </h3>
                <p className="mb-3 text-primary font-medium">{member.role}</p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {member.bio}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{member.experience} experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
}
