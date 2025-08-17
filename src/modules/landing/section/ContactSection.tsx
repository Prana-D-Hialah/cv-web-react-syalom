import { Icon } from "@iconify/react";
export default function ContactSection() {
  const socials = [
    {
      label: "github",
      icon: "ri:github-line",
      url: "https://github.com/Prana-D-Hialah",
    },
    {
      label: "linkedin",
      icon: "ri:linkedin-box-line",
      url: "https://www.linkedin.com/in/syalom-vino-7b204737b",
    },
    {
      label: "whatsapp",
      icon: "ri:whatsapp-line",
      url: "whatsapp://send?phone=6285708651518&text=Let's be friends!",
    },
  ];
  return (
    <section
      className="max-w-screen-lg md:px-20 px-5 mx-auto mt-8"
      id="contact"
    >
      <div className="flex md:flex-row flex-col">
        <p className="md:w-2/6 text-xl font-semibold md:text-left text-center">
          Contact
        </p>
        <div className="md:w-4/6 grid grid-cols-1 gap-2">
          <a
            href="https://mail.google.com/mail/?view=cm&to=ktyoedha@gmail.com"
            target="_blank"
            className="text-md hover:underline break-all md:text-left text-center"
          >
            ktyoedha@gmail.com
          </a>
          <div className="flex flex-wrap gap-4 md:justify-start justify-center">
            {socials.map((data, idx) => (
              <a
                href={data.url}
                className="bg-base-200 p-2 rounded-full"
                aria-label={data.label}
                key={`social-${idx}`}
                target="_blank"
              >
                <Icon icon={data.icon} fontSize={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
