import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function Button({ href, text }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#D4AF37] text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_#D4AF37]"
    >
      {text}
    </Link>
  );
}
