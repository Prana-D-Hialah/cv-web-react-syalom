import { Icon } from "@iconify/react";

import iconYudha from "@assets/icons/profile/icon_yudha.png";

export default function HeroSection() {
  const currentStatuses = [
    { icon: "ri:github-line",
      label: "My github",
      url: "https://github.com/Prana-D-Hialah"},
    { icon: "ri:map-pin-2-line", label: "Balong Bendo, Sidoarjo, Jawa Timur" },
    {
      icon: "ri:linkedin-box-line",
      label: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/syalom-vino-7b204737b",
    },
  ];
  return (
    <section className="flex lg:pt-16 pt-6" id="home">
      <div className="mx-auto text-center justify-content-center">
        <img
          src={iconYudha}
          className="w-20 mb-4 mx-auto"
          alt="icon-yudha-with-mac"
        />
        <h1 className="text-3xl font-bold mb-4">I'm Syalom</h1>

        <div className="inline-flex mb-4">
          <span className="border-input flex flex-row items-center gap-x-3 rounded-3xl border px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md">
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            <span className="font-medium">Open to studying</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {currentStatuses.map((data, idx) => (
            <a
              className="flex gap-2"
              key={`status-${idx}`}
              target="_blank"
              href={data.url}
            >
              <Icon icon={data.icon} className="my-auto" fontSize={20} />
              <span className="text-md">{data.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
