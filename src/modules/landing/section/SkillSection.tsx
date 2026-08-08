export default function SkillSection() {
  const skills = [
    {
      label: "Hard Skills",
      skills: ["Python Programming","Basic Algorithms","Computer Networking","MikroTik Configuration","Linux Administration (Basic)"],
    },
    {
      label: "Communication Protocol",
      skills: ["SocketIO", "MQTT", "MAVLink"],
    },
    {
      label: "Networking & Server",
      skills: ["Cisco", "MikroTik", "Linux"],
    },
    {
      label: "Google Tools",
      skills: ["Firebase", "Google Analytics", "Google Console"],
    },
  ];

  return (
    <section className="max-w-screen-lg md:px-20 px-5 mx-auto mt-8" id="skill">
      <div className="flex md:flex-row flex-col gap-2">
        <p className="md:w-2/6 text-xl font-semibold md:text-left text-center">
          Skills
        </p>
        <div className="md:w-4/6 grid grid-cols-1 gap-4">
          {skills.map((data, idx) => (
            <div className="flex flex-col gap-1" key={`skills-${idx}`}>
              <h3 className="text-md font-medium">{data.label}</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((item, idx) => (
                  <span
                    className="bg-base-200 px-3 py-1.5 rounded-lg text-sm"
                    key={`skill-${idx}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
