const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery">

      <div className="container">

        <p className="gold uppercase tracking-[6px] text-center">
          Gallery
        </p>

        <h2 className="title text-center mt-4 mb-16">
          My Fitness Journey
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl"
            >

              <img
                src={image}
                alt=""
                className="w-full h-[420px] object-cover hover:scale-110 duration-500"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
