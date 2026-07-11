export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-[30px] p-10 hover:-translate-y-2 duration-300">
      {children}
    </div>
  );
}
