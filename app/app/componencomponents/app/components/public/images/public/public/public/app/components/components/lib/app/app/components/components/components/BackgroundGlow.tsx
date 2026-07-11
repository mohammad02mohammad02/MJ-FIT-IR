export default function BackgroundGlow() {
  return (
    <>
      <div className="fixed top-[-200px] left-[-150px] w-[450px] h-[450px] bg-[#D4AF37]/10 blur-[140px] rounded-full -z-10" />

      <div className="fixed bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-[#D4AF37]/10 blur-[140px] rounded-full -z-10" />
    </>
  );
}
