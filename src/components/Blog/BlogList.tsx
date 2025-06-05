import slugify from "slugify";
import getLocalizedDate from "@/lib/getLocalizeData";

interface BlogList {
  title: string;
  thumbnail: string;
  published: string;
}

export default function BlogList(props: BlogList) {
  const { title, thumbnail, published } = props;
  const slug = slugify(title).toLowerCase();
  const formattedTime = getLocalizedDate(published);

  return (
    <>
      <a
        href={`/article/${slug}`}
        className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
      >
        <img
          src={thumbnail}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

        <div className="relative mt-auto p-4">
          <span className="block text-sm text-light dark:text-neutral-400">
            <time dateTime={formattedTime}>{formattedTime}</time>
          </span>
          <h2 className="mb-2 text-xl font-semibold text-light transition duration-100">
            {title}
          </h2>

          <span className="font-semibold text-personaSec">Read more</span>
        </div>
      </a>
    </>
  );
}
