import { Instagram, Phone } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">

      <a
        href="https://instagram.com/mj.fit.ir"
        target="_blank"
        className="glass w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 duration-300"
      >
        <Instagram />
      </a>

      <a
        href="tel:09931693826"
        className="glass w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 duration-300"
      >
        <Phone />
      </a>

    </div>
  );
}
