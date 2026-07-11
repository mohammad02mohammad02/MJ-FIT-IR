const skills = [
  { title: "Strength", value: 98 },
  { title: "Bodybuilding", value: 96 },
  { title: "Nutrition", value: 95 },
  { title: "Coaching", value: 99 },
];

export default function Skills() {
  return (
    <section className="py-32">

      <div className="container">

        <h2 className="title text-center mb-16">
          My Expertise
        </h2>

        <div className="space-y-8">

          {skills.map((item) => (

            <div key={item.title}>

              <div className="flex justify-between mb-3">

                <span>{item.title}</span>

                <span>{item.value}%</span>

              </div>

              <div className="w-full h-3 rounded-full bg-white/10">

                <div
                  className="h-3 rounded-full bg-[#D4AF37]"
                  style={{
                    width: `${item.value}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
              }
