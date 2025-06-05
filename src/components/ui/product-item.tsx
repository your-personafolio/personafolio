import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";

import slugify from "slugify";

interface ProductItemProps {
  title: string;
  category: string;
  price: string;
  discount: string;
  thumbnail: string;
}

export default function ProductItem(props: ProductItemProps) {
  const { title, category, price, discount, thumbnail } = props;
  const slug = slugify(title).toLowerCase();

  const productItemActionButtonClassNames =
    "rounded-full transition-transform hover:scale-125 bg-white dark:bg-zinc-800 hover:bg-white hover:dark:bg-zinc-900";

  return (
    <div className=" group cursor-pointer rounded-xl border p-3 space-y-3">
      <Link href={`/product/${slug}`}>
        <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
          <Image
            src={thumbnail}
            blurDataURL={thumbnail}
            placeholder="blur"
            fill
            alt="Product image"
            className="aspect-square object-cover rounded-md transition transition-300 hover:scale-105"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              {/* <Button
              size="icon"
              className={productItemActionButtonClassNames}
              onClick={onPreview}
            >
              <Expand size={20} className="text-gray-600 dark:text-white" />
            </Button> */}
              {/* <Button
              size="icon"
              className={productItemActionButtonClassNames}
              onClick={onAddToCart}
            >
              <ShoppingCart
                size={20}
                className="text-gray-600 dark:text-white"
              />
            </Button> */}
            </div>
          </div>
        </div>
        {/* Description */}
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
