import Link from "next/link";

interface BannerProps {
  url: string;
  title: string;
  desc: string;
}

export default function Banner(props: BannerProps) {
  const { url, title, desc } = props;
  return (
    <Link
      href={url}
      className="bg-white/30 backdrop-blur-sm rounded-full border-none sm:border sm:border-solid sm:border-personaGray inline-flex items-center justify-center gap-3 py-1 px-1 mb-2
    shadow-lg"
    >
      <div className="px-2 py-1 text-light bg-personaSec rounded-full font-bold whitespace-nowrap">
        {title}
      </div>
      <div className="pe-1 text-left">{desc}</div>
    </Link>
  );
}
