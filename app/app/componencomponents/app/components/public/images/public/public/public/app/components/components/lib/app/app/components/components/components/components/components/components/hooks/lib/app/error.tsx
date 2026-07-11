"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#050505] text-white flex items-center justify-center h-screen">

        <div className="text-center">

          <h1 className="text-7xl font-black text-[#D4AF37]">
            Oops!
          </h1>

          <p className="mt-6 text-white/70">
            {error.message}
          </p>

          <button
            onClick={reset}
            className="btn mt-10"
          >
            Try Again
          </button>

        </div>

      </body>
    </html>
  );
}
