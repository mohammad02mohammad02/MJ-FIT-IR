import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-[140px] font-black text-[#D4AF37]">
          404
        </h1>

        <h2 className="text-4xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-white/60 mt-6 mb-10">
          The page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="btn"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}
