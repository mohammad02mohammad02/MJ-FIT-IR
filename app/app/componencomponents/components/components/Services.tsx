import { Dumbbell, Apple, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Workout Program",
    text: "Personalized training plans designed for muscle gain, fat loss, strength and performance."
  },
  {
    icon: Apple,
    title: "Nutrition Plan",
    text: "Custom nutrition strategies based on your goals, body type and daily lifestyle."
  },
  {
    icon: ShieldCheck,
    title: "Online Coaching",
    text: "Continuous support, progress tracking and program adjustments."
  }
];

export default function Services() {
  return (
    <section id="services">

      <div className="container">

        <p className="gold uppercase tracking-[6px] text-center">
          SERVICES
        </p>

        <h2 className="title text-center mt-4 mb-16">
          What I Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass rounded-3xl p-10 hover:-translate-y-2 duration-300"
              >

                <Icon
                  size={50}
                  className="text-[#D4AF37] mb-8"
                />

                <h3 className="text-3xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="subtitle">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
