const stats = [
  {
    number: "8+",
    title: "Years Experience",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "100%",
    title: "Personal Plans",
  },
];

export default function Stats() {
  return (
    <section className="py-20">

      <div className="container">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="glass rounded-3xl p-12 text-center"
            >

              <h2 className="text-6xl font-black text-[#D4AF37]">

                {item.number}

              </h2>

              <p className="mt-4 text-white/70">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
