import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import WidthConstraint from "../shared/width-constraint";
import { APP_STORES, DOWNLOAD_APP_FEATURES } from "@/lib/constants";
import { ArrowRight, Download, Smartphone } from "lucide-react";
import phoneAppScreenshot from "@/public/ui/phone-app-screenshot.png";

export default function DownloadAppSection() {
  return (
    <section className="bg-white">
      <WidthConstraint>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Smartphone className="size-5 text-primary" />
                </div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Mobile App
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Healthcare in Your <span className="text-primary">Pocket</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Download our app to manage your prescriptions, book
                appointments, and access health resources on the go.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {DOWNLOAD_APP_FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.description}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {APP_STORES.map((store) => (
                <Link
                  key={store.name}
                  href={store.href}
                  className="group flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl transition-all duration-300"
                >
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={32}
                    height={32}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-xs text-gray-400">{store.label}</p>
                    <p className="font-semibold">{store.platform}</p>
                  </div>
                  <ArrowRight className="size-4 ml-auto opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Phone with App Screenshot */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl" />

              {/* App Screenshot */}
              <div className="relative w-80 mb-10">
                <Image
                  src={phoneAppScreenshot}
                  alt="Belvedere Pharmacy App"
                  width={320}
                  height={640}
                  className="w-full h-auto object-contain "
                  quality={95}
                  priority
                  placeholder="blur"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-20 bg-white shadow-xl rounded-xl p-3 animate-bounce-slow">
                <Download className="size-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
}
