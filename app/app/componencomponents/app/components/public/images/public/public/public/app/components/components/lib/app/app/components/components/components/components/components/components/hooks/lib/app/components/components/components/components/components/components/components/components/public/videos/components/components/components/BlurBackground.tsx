export default function BlurBackground() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px] -z-10" />

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px] -z-10" />
    </>
  );
}
