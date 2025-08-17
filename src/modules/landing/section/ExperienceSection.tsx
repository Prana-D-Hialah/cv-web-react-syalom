export default function ExperienceSection() {
  const experiences = [
    {
      job: "Danton kelas X TKJ 2",
      place: "SMKN 1 Pungging",
      duration: "Tahun ajaran 2024-2025",
      description: [
        "Menjadi ketua kelas/danton kelas selama tahun ajaran 2024-2025"
      ],
    },
    {
      job: "Wakil ketua II UKKI 2025",
      place: "SMKN 1 Pungging",
      duration: "2025",
      description: [
        "Pertama kali menjadi seorang BPH organisasi.",
        "Sangat banyak pengalaman yang saya peroleh dari hal ini."
      ],
    },
    {
      job: "Software Engineer",
      place: "EEPIS Flying Robot for Indonesia (EFRISA)",
      duration: "Apr - Sep 2023",
      description: [
        "Built a real-time UAV control system with Socket.IO.",
        "Integrated MAVLink over 433 MHz to decode flight data.",
        "Monitored UAV movement with dynamic flight path maps.",
        "Developed trip logging and replay (black box) features.",
        "Configured STM32 for auto-pointing ground antenna.",
        "Deployed the platform on AWS EC2 for remote access.",
      ],
    },
    {
      job: "Lead, Webmaster",
      place: "EEPIS News and Network Team (ENT)",
      duration: "Aug 2022 - Nov 2024",
      description: [
        "Led event coverage team to support university branding.",
        "Built CIRT website for managing cybersecurity reports.",
        "Updated media platform that won 3rd place at PCFest.",
        "Maintained UKM websites and handled incident response.",
      ],
    },
  ];

  return (
    <section
      className="max-w-screen-lg md:px-20 px-5 mx-auto mt-8"
      id="experience"
    >
      <div className="flex md:flex-row flex-col md:gap-0 gap-4">
        <p className="md:w-2/6 text-xl font-semibold md:text-left text-center">
          Background
        </p>
        <div className="md:w-4/6 grid grid-cols-1 gap-4">
          {experiences.map((data, idx) => (
            <div className="border rounded-2xl p-4" key={`experience-${idx}`}>
              <h3 className="text-lg font-semibold mb-1">{data.job}</h3>
              <div className="flex justify-between mb-2">
                <p className="text-sm mb-1">{data.place}</p>
                <p className="text-sm">{data.duration}</p>
              </div>
              <div className="prose prose-sm">
                <ul>
                  {data.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
