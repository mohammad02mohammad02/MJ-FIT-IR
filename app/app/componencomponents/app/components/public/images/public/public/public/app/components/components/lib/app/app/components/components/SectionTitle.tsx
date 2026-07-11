interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">

      <p className="gold uppercase tracking-[6px] mb-3">
        {subtitle}
      </p>

      <h2 className="title">
        {title}
      </h2>

    </div>
  );
}
