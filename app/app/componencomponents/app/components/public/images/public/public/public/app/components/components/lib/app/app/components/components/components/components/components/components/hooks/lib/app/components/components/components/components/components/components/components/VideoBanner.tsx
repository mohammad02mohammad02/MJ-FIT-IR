export default function VideoBanner() {
  return (
    <section className="relative h-[600px] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source
          src="/videos/gym.mp4"
          type="video/mp4"
        />

      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative h-full flex items-center justify-center">

        <h2 className="text-7xl font-black text-center">

          NEVER
          <br />
          GIVE UP

        </h2>

      </div>

    </section>
  );
}
