import { TEAM_MEMBERS } from "@/lib/constants";
import WidthConstraint from "../shared/width-constraint";
import { Calendar } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../general/section-divider-head";

export default function TeamSection() {
  return (
    <section>
      <WidthConstraint className="space-y-12">
        <SectionHeader heading="Our Team" />
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Meet Our <span className="text-primary">Healthcare</span> Family
          </h2>
          <p className="text-gray-600 dark:text-white/60 text-lg">
            Dedicated professionals committed to your wellbeing
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-5">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square overflow-hidden bg-linear-to-br from-primary/10 to-chart-2/10">
                {/* Placeholder for team member image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary/30 to-chart-2/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-[#002f4b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-white/60 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/40">
                  <Calendar className="size-4" />
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
