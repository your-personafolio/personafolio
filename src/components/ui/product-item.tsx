import Image from "next/image";
import Link from "next/link";
import Currency from "@/components/ui/currency";
import slugify from "slugify";

import { Eye } from "lucide-react";

interface ProductItemProps {
  title: string;
  category: string;
  price: string;
  discount: string;
  thumbnail: string;
  urlPreview: string;
}

export default function ProductItem(props: ProductItemProps) {
  const { title, category, price, discount, thumbnail, urlPreview } = props;
  const slug = slugify(title).toLowerCase();

  return (
    <div className="group cursor-pointer rounded-xl border p-3 space-y-3">
      <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
        <Link href={`/product/${slug}`}>
          <Image
            src={thumbnail}
            blurDataURL={thumbnail}
            placeholder="blur"
            fill
            alt="Product image"
            className="aspect-square object-cover rounded-md transition transition-300 hover:scale-105"
          />
        </Link>

        <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition absolute w-full px-6 bottom-2 ">
          <div className="flex gap-x-6 justify-center">
            <Link
              className="rounded-full text-dark bg-light hover:bg-light py-1 px-3 flex items-center gap-1 transition-all ease-linear duration-200 hover:scale-105"
              href={urlPreview}
              target="_blank"
            >
              Preview
              <Eye size={20} />
            </Link>
          </div>
        </div>
      </div>
      {/* Description */}
      <Link href={`/product/${slug}`}>
        <div>
          <p className="font-semibold text-lg">{title}</p>
          <p className="text-sm text-personaGray dark:text-neutral-400">
            {category}
          </p>
        </div>
        {/* Price */}
        <div className="block">
          <Currency value={discount} style="non-discount" />
          <Currency value={price} style="discount" />
        </div>
      </Link>
    </div>
  );
}
