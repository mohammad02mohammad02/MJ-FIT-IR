export default function About() {
  return (
    <section id="about">

      <div className="container grid lg:grid-cols-2 gap-20 items-center">

        <img
          src="/images/about.jpg"
          className="rounded-3xl"
          alt="About"
        />

        <div>

          <p className="gold uppercase tracking-[6px] mb-4">
            ABOUT ME
          </p>

          <h2 className="title mb-8">
            Mohammad Jalali
          </h2>

          <p className="subtitle">

            Fitness is more than building muscles.

            <br /><br />

            It is about discipline,
            confidence,
            consistency
            and becoming the strongest version of yourself.

            <br /><br />

            Every program is designed personally
            according to your body,
            goals,
            experience
            and lifestyle.

          </p>

        </div>

      </div>

    </section>
  );
}
